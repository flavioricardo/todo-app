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
import { storage } from "./utils/storage";
import { taskService } from "./services/taskService";
// Local imports
import { translations } from "./constants/translations";
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
  useEffect(() => storage.set("theme", theme), [theme]);
  useEffect(() => storage.set("language", language), [language]);

  // Carregar tarefas do localStorage quando não há usuário
  useEffect(() => {
    if (!user) {
      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    }
  }, []);

  // Auth listener e sincronização de tarefas
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setIsLoading(true);
        try {
          const syncedTasks = await taskService.syncTasks(currentUser.uid);
          setTasks(syncedTasks);
          storage.set("tasks", syncedTasks);

          showToastMessage("Tarefas sincronizadas com sucesso!");
        } catch (error) {
          console.error("Erro ao sincronizar tarefas:", error);
          showToastMessage("Erro ao sincronizar tarefas");
        } finally {
          setIsLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Salvar tarefas no localStorage
  // Agora apenas fazemos isso quando não há usuário logado
  useEffect(() => {
    if (!user) {
      storage.set("tasks", tasks);
    }
  }, [tasks, user]);

  // Theme toggle
  const toggleTheme = () =>
    setTheme((prev) => (prev === "lightWash" ? "dark" : "lightWash"));

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
      alert("Erro ao logar com email: " + error.message);
    }
  };

  // Função para sincronizar tarefas com o Firebase
  const syncData = async () => {
    if (!user) {
      showToastMessage(translations[language].needLogin);
      setOpenLoginModal(true);
      return;
    }

    setIsLoading(true);
    try {
      const syncedTasks = await taskService.syncTasks(user.uid);
      setTasks(syncedTasks);
      storage.set("tasks", syncedTasks);
      showToastMessage(translations[language].syncSuccess);
    } catch (error) {
      console.error("Erro ao sincronizar tarefas:", error);
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
      alert("Erro ao logar com Google: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);

      // Carregar tarefas do localStorage novamente
      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
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
        // Usuário logado - salvar no Firebase
        setIsLoading(true);
        const savedTask = await taskService.addTask(newTask, user.uid);
        setTasks((prevTasks) => [...prevTasks, savedTask]);
      } else {
        // Usuário não logado - salvar apenas localmente
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      showToastMessage("Erro ao adicionar tarefa");
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
        // Usuário logado e tarefa já existe no Firebase
        setIsLoading(true);
        await taskService.updateTask(updatedTask, user.uid);
      }

      // Atualizar estado local de qualquer maneira
      const updated = tasks.map((task) =>
        task.id === taskId ? updatedTask : task
      );

      setTasks(updated);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      showToastMessage("Erro ao atualizar tarefa");
    } finally {
      setIsLoading(false);
    }
  };

  const clearCompletedTasks = async () => {
    try {
      const completedTasks = tasks.filter((t) => t.completed);
      const remainingTasks = tasks.filter((t) => !t.completed);

      if (user) {
        // Usuário logado - excluir do Firebase
        setIsLoading(true);

        for (const task of completedTasks) {
          if (task.firebaseId) {
            await taskService.deleteTask(task.firebaseId);
          }
        }
      }

      setTasks(remainingTasks);
      showToastMessage("Tarefas concluídas removidas com sucesso");
    } catch (error) {
      console.error("Erro ao limpar tarefas concluídas:", error);
      showToastMessage("Erro ao limpar tarefas concluídas");
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
            setLanguage={setLanguage}
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
            onSearchChange={setSearchTerm}
            onFilterChange={setFilterStatus}
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
