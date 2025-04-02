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
import { storage } from "../../utils/storage";

// Traduções
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

// Cores das categorias
const categoryColors = {
  personal_care: "info",
  meal: "success",
  work: "error",
  household_chores: "warning",
  transportation: "recommendation",
  physical_activity: "darkWash",
  social_interaction: "neutral",
};

// Função para obter a cor da categoria
const getCategoryColor = (categoryValue) => {
  if (!categoryColors[categoryValue]) {
    console.warn(`Unknown category: ${categoryValue}`);
  }
  return categoryColors[categoryValue] || "neutral";
};

export default function TodoApp() {
  // Estados
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);
  const [tasks, setTasks] = useState(storage.get("tasks", []));
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showToast, setShowToast] = useState(false);

  // Efeitos
  useEffect(() => {
    storage.set("theme", theme);
  }, [theme]);

  useEffect(() => {
    storage.set("language", language);
  }, [language]);

  useEffect(() => {
    storage.set("tasks", tasks);
  }, [tasks]);

  // Funções
  const toggleTheme = () => {
    setTheme((prev) => (prev === "lightWash" ? "dark" : "lightWash"));
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

  const [user, setUser] = useState({});
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setOpenLoginModal((prev) => !prev);
  };

  const HEADER_ZINDEX = new FixedZIndex(10);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  // Renderização
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
        {/* Cabeçalho */}
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
                  color="white"
                  iconEnd="person"
                  onClick={toggleLoginModal}
                />
              </ButtonGroup>
            ),
          }}
        />
        {/* Modal de Login */}
        {openLoginModal && (
          <Layer zIndex={zIndex}>
            <Modal
              closeOnOutsideClick
              accessibilityModalLabel="View default padding and styling"
              footer={<Heading size="600">Footer</Heading>}
              heading="Small modal"
              onDismiss={() => {
                // dispatch({ type: "none" });
              }}
              size="sm"
            >
              <Heading size="600">Children</Heading>
            </Modal>
          </Layer>
        )}

        {/* Adicionar Tarefa */}
        <Box
          marginTop={4}
          width="100%"
          display="flex"
          justifyContent="between"
          alignItems="center"
          gap={2}
        >
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
        {/* Filtros */}
        <Box
          marginTop={4}
          width="100%"
          display="flex"
          justifyContent="between"
          alignItems="center"
          gap={2}
        >
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
        {/* Lista de Tarefas */}
        <Box marginTop={4} width="100%" display="block">
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
        {/* Botão Limpar Concluídas */}
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
