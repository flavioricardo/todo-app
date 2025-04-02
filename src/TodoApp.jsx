import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Checkbox,
  Box,
  Fieldset,
  ColorSchemeProvider,
  SearchField,
  SelectList,
  Badge,
  Toast,
  Flex,
  PageHeader,
  Image,
  ButtonGroup,
  Layer,
  Modal,
  Heading,
  FixedZIndex,
  CompositeZIndex,
} from "gestalt";
import "gestalt/dist/gestalt.css";
import { storage } from "./utils/storage";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

// Translations
const translations = {
  en: {
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    signIn: "Sign In",
    signOut: "Sign Out",
    addTask: "Add Task",
    searchPlaceholder: "Search task...",
    clearCompleted: "Clear Completed",
    taskList: "Task List:",
    addTaskPlaceholder: "Add a task",
    filterPlaceholder: "Filter tasks...",
    all: "All",
    completed: "Completed",
    pending: "Pending",
    categories: {
      personal_care: "Care",
      meal: "Meal",
      work: "Work",
      household_chores: "Chores",
      transportation: "Transport",
      physical_activity: "Exercise",
      social_interaction: "Social",
    },
  },
  pt: {
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    signIn: "Logar",
    signOut: "Sair",
    addTask: "Adicionar",
    searchPlaceholder: "Buscar tarefa...",
    clearCompleted: "Limpar concluídas",
    taskList: "Lista de tarefas:",
    addTaskPlaceholder: "Adicione uma tarefa",
    filterPlaceholder: "Filtrar tarefas...",
    all: "Todas",
    completed: "Concluídas",
    pending: "Pendentes",
    categories: {
      personal_care: "Cuidado",
      meal: "Refeição",
      work: "Trabalho",
      household_chores: "Tarefas",
      transportation: "Transporte",
      physical_activity: "Exercício",
      social_interaction: "Social",
    },
  },
};

// Category Colors
const categoryColors = {
  personal_care: "info",
  meal: "success",
  work: "error",
  household_chores: "warning",
  transportation: "recommendation",
  physical_activity: "darkWash",
  social_interaction: "neutral",
};

// Helper Functions
const getCategoryColor = (categoryValue) => {
  if (!categoryColors[categoryValue]) {
    console.warn(`Unknown category: ${categoryValue}`);
  }
  return categoryColors[categoryValue] || "neutral";
};

export default function TodoApp() {
  // States
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);
  const [tasks, setTasks] = useState(storage.get("tasks", []));
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showToast, setShowToast] = useState(false);

  // Authentication States
  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const googleProvider = new GoogleAuthProvider();

  // Effects
  useEffect(() => {
    storage.set("theme", theme);
  }, [theme]);

  useEffect(() => {
    storage.set("language", language);
  }, [language]);

  useEffect(() => {
    storage.set("tasks", tasks);
  }, [tasks]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handlers
  const toggleTheme = () => {
    setTheme((prev) => (prev === "lightWash" ? "dark" : "lightWash"));
  };

  const handleLoginEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
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

  const addTask = () => {
    if (!task) return;
    const newTasks = [...tasks, { text: task, category, completed: false }];
    setTasks(newTasks);
    setTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const clearCompletedTasks = () => {
    const remaining = tasks.filter((t) => !t.completed);
    setTasks(remaining);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const filteredTasks = tasks.filter((task) => {
    const matches = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterStatus === "completed") return matches && task.completed;
    if (filterStatus === "pending") return matches && !task.completed;
    return matches;
  });

  // Z-Index
  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <ColorSchemeProvider colorScheme={theme}>
      <Box
        as="main"
        margin="auto"
        padding={4}
        color={theme === "lightWash" ? "lightWash" : "dark"}
        rounding={0}
        justifyContent="center"
        display="block"
        height="100vh"
      >
        {/* Header */}
        <PageHeader
          title="To-Do App"
          thumbnail={
            <Image
              alt="To-Do App"
              key="logo"
              fit="contain"
              naturalHeight={1}
              naturalWidth={1}
              src="public/logo512.png"
            />
          }
          primaryAction={{
            component: (
              <ButtonGroup key="primaryAction">
                <Button
                  text={
                    theme === "lightWash"
                      ? translations[language].darkMode
                      : translations[language].lightMode
                  }
                  onClick={toggleTheme}
                />
                <SelectList
                  id="languageSelect"
                  value={language}
                  onChange={({ value }) => setLanguage(value)}
                >
                  <SelectList.Option label="Português" value="pt" />
                  <SelectList.Option label="English" value="en" />
                </SelectList>
                <Button
                  text={
                    user?.email
                      ? translations[language].signOut
                      : translations[language].signIn
                  }
                  iconEnd="person"
                  color="white"
                  onClick={
                    user?.email ? handleSignOut : () => setOpenLoginModal(true)
                  }
                />
              </ButtonGroup>
            ),
          }}
        />

        {/* Login Modal */}
        {openLoginModal && (
          <Layer zIndex={zIndex}>
            <Modal
              accessibilityModalLabel="Login"
              heading={translations[language].signIn}
              onDismiss={() => setOpenLoginModal(false)}
              size="sm"
              footer={
                <Flex justifyContent="between">
                  {user?.email && (
                    <Button
                      text={translations[language].signOut}
                      onClick={handleSignOut}
                      color="red"
                    />
                  )}
                </Flex>
              }
            >
              <Box direction="column" padding={4}>
                {!user?.email && (
                  <Flex direction="column" gap={4}>
                    <TextField
                      id="email"
                      type="email"
                      onChange={({ value }) => setLoginEmail(value)}
                      placeholder="Email"
                    />
                    <TextField
                      id="password"
                      type="password"
                      onChange={({ value }) => setLoginPassword(value)}
                      placeholder="Password"
                    />
                    <Button
                      text="Login with Email"
                      onClick={handleLoginEmail}
                      color="blue"
                    />
                    <Button
                      text="Login with Google"
                      onClick={handleLoginGoogle}
                      iconEnd="google-plus"
                    />
                  </Flex>
                )}
                {user?.email && (
                  <Heading size="400">Bem-vindo, {user.email}</Heading>
                )}
              </Box>
            </Modal>
          </Layer>
        )}

        {/* Add Task */}
        <Box marginTop={4} width="100%" display="flex" gap={2}>
          <SelectList
            id="categorySelect"
            onChange={({ value }) => setCategory(value)}
          >
            {Object.keys(categoryColors).map((value) => (
              <SelectList.Option
                key={value}
                label={translations[language].categories[value]}
                value={value}
              />
            ))}
          </SelectList>
          <Box flex="grow" paddingX={2}>
            <TextField
              id="taskInput"
              onChange={({ value }) => setTask(value)}
              placeholder={translations[language].addTaskPlaceholder}
              value={task}
              width="100%"
            />
          </Box>
          <Button
            text={translations[language].addTask}
            onClick={addTask}
            color="blue"
          />
        </Box>

        {/* Filters */}
        <Box marginTop={4} width="100%" display="flex" gap={2}>
          <SearchField
            accessibilityLabel={translations[language].searchPlaceholder}
            id="searchField"
            onChange={({ value }) => setSearchTerm(value)}
            placeholder={translations[language].searchPlaceholder}
            value={searchTerm}
          />
          <SelectList
            id="filterStatus"
            onChange={({ value }) => setFilterStatus(value)}
          >
            <SelectList.Option label={translations[language].all} value="all" />
            <SelectList.Option
              label={translations[language].completed}
              value="completed"
            />
            <SelectList.Option
              label={translations[language].pending}
              value="pending"
            />
          </SelectList>
        </Box>

        {/* Task List */}
        <Box marginTop={4} width="100%">
          <Fieldset legend={translations[language].taskList}>
            {filteredTasks.map((t, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="between"
                padding={2}
              >
                <Checkbox
                  id={`task-${index}`}
                  checked={t.completed}
                  label={t.text}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Badge
                  text={translations[language].categories[t.category]}
                  type={getCategoryColor(t.category)}
                />
              </Box>
            ))}
          </Fieldset>
        </Box>

        {/* Clear Completed Button */}
        {tasks.some((task) => task.completed) && (
          <Box marginTop={4} width="100%" display="flex" justifyContent="left">
            <Button
              text={translations[language].clearCompleted}
              onClick={clearCompletedTasks}
              color="red"
            />
          </Box>
        )}

        {/* Toast */}
        {showToast && (
          <Flex
            alignItems="end"
            height="100%"
            justifyContent="center"
            width="100%"
          >
            <Toast
              variant="success"
              text={translations[language].clearCompleted}
              dismissButton={{
                onDismiss: () => {
                  setShowToast(false);
                },
              }}
            />
          </Flex>
        )}
      </Box>
    </ColorSchemeProvider>
  );
}
