import React, { useState, useEffect } from "react";
import {
  Box,
  ColorSchemeProvider,
  CompositeZIndex,
  DeviceTypeProvider,
  FixedZIndex,
} from "gestalt";
import "gestalt/dist/gestalt.css";

// Firebase imports
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Components
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import TaskToast from "./components/TaskToast";

// Local imports
import { storage } from "./utils/storage";
import useIsMobile from "./utils/useIsMobile";

export default function TodoApp() {
  // Basic app state
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [showToast, setShowToast] = useState(false);

  // Task management state
  const [tasks, setTasks] = useState(storage.get("tasks", []));
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Authentication state
  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // Constants & Providers
  const googleProvider = new GoogleAuthProvider();
  const isMobile = useIsMobile();
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  // Persistence effects
  useEffect(() => storage.set("theme", theme), [theme]);
  useEffect(() => storage.set("language", language), [language]);
  useEffect(() => storage.set("tasks", tasks), [tasks]);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Theme toggle
  const toggleTheme = () =>
    setTheme((prev) => (prev === "lightWash" ? "dark" : "lightWash"));

  // Auth handlers
  const handleLoginEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setOpenLoginModal(false);
    } catch (error) {
      alert("Erro ao logar com email: " + error.message);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setOpenLoginModal(false);
    } catch (error) {
      alert("Erro ao logar com Google: " + error.message);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Task handlers
  const addTask = (taskText, taskCategory) => {
    const newTasks = [
      ...tasks,
      {
        id: Date.now().toString(),
        text: taskText,
        category: taskCategory,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const clearCompletedTasks = () => {
    const remaining = tasks.filter((t) => !t.completed);
    setTasks(remaining);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matches = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterStatus === "completed") return matches && task.completed;
    if (filterStatus === "pending") return matches && !task.completed;
    return matches;
  });

  return (
    <DeviceTypeProvider deviceType={isMobile ? "mobile" : "desktop"}>
      <ColorSchemeProvider colorScheme={theme}>
        <Box
          as="main"
          margin="auto"
          padding={4}
          width="100%"
          color={theme === "lightWash" ? "lightWash" : "dark"}
          rounding={0}
          justifyContent="center"
          display="block"
          height="100vh"
        >
          <AppHeader
            theme={theme}
            language={language}
            isMobile={isMobile}
            user={user}
            toggleTheme={toggleTheme}
            setLanguage={setLanguage}
            handleSignOut={handleSignOut}
            setOpenLoginModal={setOpenLoginModal}
          />

          <LoginModal
            isOpen={openLoginModal}
            onClose={() => setOpenLoginModal(false)}
            onLoginEmail={handleLoginEmail}
            onLoginGoogle={handleLoginGoogle}
            onSignOut={handleSignOut}
            user={user}
            language={language}
            zIndex={zIndex}
          />

          <TaskForm
            onAddTask={addTask}
            language={language}
            isMobile={isMobile}
          />

          <TaskFilters
            searchTerm={searchTerm}
            filterStatus={filterStatus}
            onSearchChange={setSearchTerm}
            onFilterChange={setFilterStatus}
            language={language}
            isMobile={isMobile}
          />

          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTaskCompletion}
            onClearCompleted={clearCompletedTasks}
            filterStatus={filterStatus}
            language={language}
            isMobile={isMobile}
          />

          <TaskToast
            show={showToast}
            message="clearCompleted"
            onDismiss={() => setShowToast(false)}
            language={language}
          />
        </Box>
      </ColorSchemeProvider>
    </DeviceTypeProvider>
  );
}
