import "gestalt/dist/gestalt.css";

import {
  Box,
  ColorSchemeProvider,
  CompositeZIndex,
  DeviceTypeProvider,
  FixedZIndex,
  Flex,
  Spinner,
} from "gestalt";
// Firebase imports
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

// Components
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import TaskFilters from "./components/TaskFilters";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskToast from "./components/TaskToast";
import { auth } from "./firebase";
import { taskService } from "./services/taskService";
import { storage } from "./utils/storage";
// Local imports
import { translations } from "./constants/translations";
import { userPreferencesService } from "./services/userPreferencesService";
import useIsMobile from "./utils/useIsMobile";

export default function TodoApp() {
  // Basic app state
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Task management state
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [groupBy, setGroupBy] = useState(storage.get("groupBy", "none"));
  const [isLoading, setIsLoading] = useState(false);

  // Authentication state
  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // Constants & Providers
  const googleProvider = new GoogleAuthProvider();
  const isMobile = useIsMobile();
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  // Persistence effects
  // Updated to save to Firebase when user is logged in
  useEffect(() => {
    if (user) {
      userPreferencesService.updatePreference(user.uid, "theme", theme);
    }
    storage.set("theme", theme);
  }, [theme, user]);

  useEffect(() => {
    if (user) {
      userPreferencesService.updatePreference(user.uid, "language", language);
    }
    storage.set("language", language);
  }, [language, user]);

  useEffect(() => {
    if (user) {
      userPreferencesService.updatePreference(user.uid, "groupBy", groupBy);
    }
    storage.set("groupBy", groupBy);
  }, [groupBy, user]);

  // Load tasks from localStorage when no user
  useEffect(() => {
    if (!user) {
      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    }
  }, []);

  // Auth listener and task/preferences sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setIsLoading(true);
        try {
          // Sync tasks
          const syncedTasks = await taskService.syncTasks(currentUser.uid);
          setTasks(syncedTasks);
          storage.set("tasks", syncedTasks);

          // Load user preferences
          const userPrefs = await userPreferencesService.getUserPreferences(
            currentUser.uid
          );
          if (userPrefs) {
            if (userPrefs.theme) setTheme(userPrefs.theme);
            if (userPrefs.language) setLanguage(userPrefs.language);
            if (userPrefs.groupBy) setGroupBy(userPrefs.groupBy);
          }

          showToastMessage("Tasks and preferences synced successfully!");
        } catch (error) {
          console.error("Error syncing data:", error);
          showToastMessage("Error syncing data");
        } finally {
          setIsLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Save tasks to localStorage
  // Only do this when no user is logged in
  useEffect(() => {
    if (!user) {
      storage.set("tasks", tasks);
    }
  }, [tasks, user]);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "lightWash" ? "dark" : "lightWash";
    setTheme(newTheme);
  };

  // Language setter
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Toast helper
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
      showToastMessage(
        `${translations[language].loginEmailError}: ${error.message}`
      );
    }
  };

  // Function to sync tasks with Firebase
  const syncData = async () => {
    if (!user) {
      showToastMessage(translations[language].needLogin);
      setOpenLoginModal(true);
      return;
    }

    setIsLoading(true);
    try {
      // Sync tasks
      const syncedTasks = await taskService.syncTasks(user.uid);
      setTasks(syncedTasks);
      storage.set("tasks", syncedTasks);

      // Sync preferences
      await userPreferencesService.saveUserPreferences(user.uid, {
        theme,
        language,
        groupBy,
      });

      showToastMessage(translations[language].syncSuccess);
    } catch (error) {
      console.error("Error syncing data:", error);
      showToastMessage(translations[language].syncError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setOpenLoginModal(false);
    } catch (error) {
      showToastMessage(
        `${translations[language].loginGoogleError}: ${error.message}`
      );
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);

      // Load tasks from localStorage again
      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    } catch (error) {
      console.error("Error signing out:", error);
      showToastMessage(translations[language].signOutError);
    }
  };

  // Task handlers
  const addTask = async (taskText, taskCategory) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      category: taskCategory,
      completed: false,
    };

    setIsLoading(true);
    try {
      if (user) {
        // User logged in - save to Firebase
        setIsLoading(true);
        const savedTask = await taskService.addTask(newTask, user.uid);
        setTasks((prevTasks) => [...prevTasks, savedTask]);
      } else {
        // User not logged in - save locally only
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    } catch (error) {
      console.error("Error adding task:", error);
      showToastMessage(translations[language].addTaskError);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      if (!taskToUpdate) return;

      const updatedTask = {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      };

      if (user && updatedTask.firebaseId) {
        // User logged in and task exists in Firebase
        setIsLoading(true);
        await taskService.updateTask(updatedTask, user.uid);
      }

      // Update local state either way
      const updated = tasks.map((task) =>
        task.id === taskId ? updatedTask : task
      );

      setTasks(updated);
    } catch (error) {
      console.error("Error updating task:", error);
      showToastMessage(translations[language].updateTaskError);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCompletedTasks = async () => {
    try {
      const completedTasks = tasks.filter((t) => t.completed);
      const remainingTasks = tasks.filter((t) => !t.completed);

      if (user) {
        // User logged in - delete from Firebase
        setIsLoading(true);

        for (const task of completedTasks) {
          if (task.firebaseId) {
            await taskService.deleteTask(task.firebaseId);
          }
        }
      }

      setTasks(remainingTasks);
      showToastMessage(translations[language].clearCompletedSuccess);
    } catch (error) {
      console.error("Error clearing completed tasks:", error);
      showToastMessage(translations[language].clearCompletedError);
    } finally {
      setIsLoading(false);
    }
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
            setLanguage={handleLanguageChange}
            handleSignOut={handleSignOut}
            setOpenLoginModal={setOpenLoginModal}
            syncData={syncData}
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
            disabled={isLoading}
          />

          <TaskFilters
            searchTerm={searchTerm}
            filterStatus={filterStatus}
            groupBy={groupBy}
            onSearchChange={setSearchTerm}
            onFilterChange={setFilterStatus}
            onGroupByChange={setGroupBy}
            language={language}
            isMobile={isMobile}
            disabled={isLoading}
          />

          {isLoading ? (
            <Flex alignItems="center" justifyContent="center" height="200px">
              <Spinner
                show
                accessibilityLabel={translations[language].loadingTasks}
              />
            </Flex>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onToggleTask={toggleTaskCompletion}
              onClearCompleted={clearCompletedTasks}
              filterStatus={filterStatus}
              groupBy={groupBy}
              language={language}
              isMobile={isMobile}
            />
          )}

          <TaskToast
            show={showToast}
            message={toastMessage}
            onDismiss={() => setShowToast(false)}
            language={language}
          />
        </Box>
      </ColorSchemeProvider>
    </DeviceTypeProvider>
  );
}
