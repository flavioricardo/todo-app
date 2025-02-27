import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
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
  IconButton,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';

const translations = {
  en: {
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    addTask: 'Add Task',
    searchPlaceholder: 'Search task...',
    clearCompleted: 'Clear Completed',
    taskList: 'Task List:',
    addTaskPlaceholder: 'Add a task',
    filterPlaceholder: 'Filter tasks...',
    all: 'All',
    completed: 'Completed',
    pending: 'Pending',
    categories: {
      personal_care: 'Care',
      meal: 'Meal',
      work: 'Work',
      household_chores: 'Chores',
      transportation: 'Transport',
      physical_activity: 'Exercise',
      social_interaction: 'Social',
    },
  },
  pt: {
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    addTask: 'Adicionar',
    searchPlaceholder: 'Buscar tarefa...',
    clearCompleted: 'Limpar concluídas',
    taskList: 'Lista de tarefas:',
    addTaskPlaceholder: 'Adicione uma tarefa',
    filterPlaceholder: 'Filtrar tarefas...',
    all: 'Todas',
    completed: 'Concluídas',
    pending: 'Pendentes',
    categories: {
      personal_care: 'Cuidado',
      meal: 'Refeição',
      work: 'Trabalho',
      household_chores: 'Tarefas',
      transportation: 'Transporte',
      physical_activity: 'Exercício',
      social_interaction: 'Social',
    },
  },
};

const categoryColors = {
  personal_care: 'info',
  meal: 'success',
  work: 'error',
  household_chores: 'warning',
  transportation: 'recommendation',
  physical_activity: 'darkWash',
  social_interaction: 'neutral',
};

const getCategoryColor = (categoryValue) => {
  if (!categoryColors[categoryValue]) {
    console.warn(`Unknown category: ${categoryValue}`);
  }
  return categoryColors[categoryValue] || 'neutral';
};

export default function TodoApp() {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'pt'
  );
  const [task, setTask] = useState('');
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [theme, setTheme] = useState('light');
  const [showToast, setShowToast] = useState(false);
  const [size, setSize] = useState('scale');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(savedTasks);
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleSize = () => {
    setSize((prevSize) => (prevSize === 'scale' ? 'minimize' : 'scale'));
  };

  const addTask = () => {
    if (!task) return;
    const newTasks = [...tasks, { text: task, category, completed: false }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTask('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const clearCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filterStatus === 'completed') return matchesSearch && task.completed;
    if (filterStatus === 'pending') return matchesSearch && !task.completed;
    return matchesSearch;
  });

  return (
    <ColorSchemeProvider colorScheme={theme}>
      <Box
        padding={4}
        margin="auto"
        color={theme === 'light' ? 'light' : 'dark'}
        rounding={4}
        justifyContent="center"
        display="block"
        fit
        maxWidth={size === 'scale' ? '100%' : 1024}
      >
        <Box
          display="flex"
          justifyContent="between"
          alignItems="center"
          marginBottom={2}
          width="100%"
        >
          <SelectList
            id="languageSelect"
            onChange={({ value }) => setLanguage(value)}
          >
            <SelectList.Option label="Português" value="pt" />
            <SelectList.Option label="English" value="en" />
          </SelectList>
          <Button
            text={
              theme === 'light'
                ? translations[language].darkMode
                : translations[language].lightMode
            }
            onClick={toggleTheme}
          />
          <IconButton
            accessibilityLabel="Size"
            icon={size === 'scale' ? 'minimize' : 'scale'}
            size="md"
            onClick={toggleSize}
          />
        </Box>
        <Box padding={3} color="red" rounding={2} width="100%">
          <Text align="center" size="lg" weight="bold" color="white">
            To-Do App
          </Text>
        </Box>
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
        {tasks.some((task) => task.completed) && (
          <Box marginTop={4} width="100%" display="flex" justifyContent="left">
            <Button
              text={translations[language].clearCompleted}
              onClick={clearCompletedTasks}
              color="red"
            />
          </Box>
        )}
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
