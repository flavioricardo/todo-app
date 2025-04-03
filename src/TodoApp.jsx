import React, { useState, useEffect, Fragment, useRef } from "react";

// Gestalt imports
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  ColorSchemeProvider,
  CompositeZIndex,
  DeviceTypeProvider,
  Dropdown,
  Fieldset,
  FixedZIndex,
  Flex,
  Heading,
  IconButton,
  Image,
  Label,
  Layer,
  Modal,
  PageHeader,
  SearchField,
  SelectList,
  Text,
  TextField,
  Toast,
  Tooltip,
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

// Local imports
import { storage } from "./utils/storage";
import useIsMobile from "./utils/useIsMobile";

// Constants
const translations = {
  en: {
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    signIn: "Sign In",
    signOut: "Sign Out",
    options: "Options",
    addTask: "Add Task",
    searchPlaceholder: "Search task...",
    clearCompleted: "Clear Completed",
    taskList: "Task List:",
    addTaskPlaceholder: "Add a task",
    filterPlaceholder: "Filter tasks",
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
    options: "Opções",
    addTask: "Adicionar",
    searchPlaceholder: "Buscar tarefa...",
    clearCompleted: "Limpar concluídas",
    taskList: "Lista de tarefas:",
    addTaskPlaceholder: "Adicione uma tarefa",
    filterPlaceholder: "Filtrar tarefas",
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

const categoryColors = {
  personal_care: "info",
  meal: "success",
  work: "error",
  household_chores: "warning",
  transportation: "recommendation",
  physical_activity: "darkWash",
  social_interaction: "neutral",
};

// Helper functions
const getCategoryColor = (categoryValue) => {
  if (!categoryColors[categoryValue]) {
    console.warn(`Unknown category: ${categoryValue}`);
  }
  return categoryColors[categoryValue] || "neutral";
};

export default function TodoApp() {
  // Basic app state
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [showToast, setShowToast] = useState(false);

  // Task management state
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);
  const [tasks, setTasks] = useState(storage.get("tasks", []));
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Authentication state
  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // UI state
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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

  // Task handlers
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
          {/* Header */}
          <PageHeader
            title="To-Do App"
            borderStyle="none"
            thumbnail={
              !isMobile && (
                <Image
                  alt="To-Do App"
                  key="logo"
                  fit="contain"
                  naturalHeight={1}
                  naturalWidth={1}
                  src="/logo512.png"
                />
              )
            }
            primaryAction={{
              component: (
                <ButtonGroup>
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
                      user?.email
                        ? handleSignOut
                        : () => setOpenLoginModal(true)
                    }
                  />
                </ButtonGroup>
              ),
            }}
            dropdownAccessibilityLabel={translations[language].options}
            secondaryAction={
              isMobile && {
                component: (
                  <Fragment>
                    <Tooltip
                      idealDirection="up"
                      text={translations[language].options}
                    >
                      <IconButton
                        ref={anchorRef}
                        accessibilityExpanded={open}
                        accessibilityHaspopup
                        accessibilityLabel={translations[language].options}
                        icon="ellipsis"
                        iconColor="darkGray"
                        onClick={() => setOpen((prev) => !prev)}
                        selected={open}
                      />
                    </Tooltip>
                  </Fragment>
                ),
                dropdownItems: [
                  <Dropdown.Item
                    key="set-language"
                    onSelect={() =>
                      setLanguage(language === "en" ? "pt" : "en")
                    }
                    option={{
                      value: language,
                      label: language === "en" ? "English" : "Português",
                    }}
                    iconEnd="globe"
                  />,
                  <Dropdown.Item
                    key="set-theme"
                    onSelect={() => toggleTheme()}
                    option={{
                      value: language,
                      label:
                        theme === "lightWash"
                          ? translations[language].darkMode
                          : translations[language].lightMode,
                    }}
                    iconEnd="globe"
                  />,
                  <Dropdown.Item
                    key="get-login"
                    onSelect={() =>
                      user?.email ? handleSignOut : setOpenLoginModal(true)
                    }
                    option={{
                      value: "",
                      label: user?.email
                        ? translations[language].signOut
                        : translations[language].signIn,
                    }}
                    iconEnd="person"
                  />,
                ],
              }
            }
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
          <Box
            marginTop={4}
            display="flex"
            direction={isMobile ? "column" : "row"}
            justifyContent={isMobile ? "between" : "start"}
            alignItems={isMobile ? "stretch" : "center"}
            gap={isMobile ? 6 : 3}
          >
            <Box
              marginBottom={isMobile ? 4 : 0}
              width={isMobile ? "100%" : "auto"}
            >
              <SelectList
                id="categorySelect"
                onChange={({ value }) => setCategory(value)}
                size={isMobile ? "lg" : "md"}
              >
                {Object.keys(categoryColors).map((value) => (
                  <SelectList.Option
                    key={value}
                    label={translations[language].categories[value]}
                    value={value}
                  />
                ))}
              </SelectList>
            </Box>

            <Box
              flex="grow"
              paddingX={isMobile ? 0 : 2}
              marginBottom={isMobile ? 4 : 0}
              width={isMobile ? "100%" : "auto"}
            >
              <TextField
                id="taskInput"
                onChange={({ value }) => setTask(value)}
                placeholder={translations[language].addTaskPlaceholder}
                value={task}
                width="100%"
                size={isMobile ? "lg" : "md"}
              />
            </Box>

            <Button
              text={translations[language].addTask}
              onClick={addTask}
              color="blue"
              fullWidth={isMobile}
              size={isMobile ? "lg" : "md"}
            />
          </Box>

          {/* Filters */}
          <Box
            marginTop={4}
            width="100%"
            display="flex"
            justifyContent={isMobile ? "between" : "start"}
            alignItems={isMobile ? "stretch" : "center"}
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 4 : 2}
          >
            <Box paddingX={isMobile ? 0 : 2} marginBottom={isMobile ? 4 : 0}>
              <Label htmlFor="searchField">
                <Text>{translations[language].filterPlaceholder}</Text>
              </Label>
            </Box>
            <Box paddingX={0} marginBottom={isMobile ? 4 : 0}>
              <SearchField
                accessibilityLabel={translations[language].searchPlaceholder}
                id="searchField"
                onChange={({ value }) => setSearchTerm(value)}
                placeholder={translations[language].searchPlaceholder}
                value={searchTerm}
                size={isMobile ? "lg" : "md"}
              />
            </Box>
            <Box paddingX={isMobile ? 0 : 2}>
              <SelectList
                id="filterStatus"
                onChange={({ value }) => setFilterStatus(value)}
                size={isMobile ? "lg" : "md"}
              >
                <SelectList.Option
                  label={translations[language].all}
                  value="all"
                />
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
          {tasks.some((task) => task.completed) &&
            filterStatus !== "pending" && (
              <Box marginTop={4} width="100%" display="flex">
                <Button
                  text={translations[language].clearCompleted}
                  onClick={clearCompletedTasks}
                  color="red"
                  fullWidth={isMobile}
                  size={isMobile ? "lg" : "md"}
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
                  onDismiss: () => setShowToast(false),
                }}
              />
            </Flex>
          )}
        </Box>
      </ColorSchemeProvider>
    </DeviceTypeProvider>
  );
}
