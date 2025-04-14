import "gestalt/dist/gestalt.css";

import {
  Box,
  ColorSchemeProvider,
  DeviceTypeProvider,
  Flex,
  Spinner,
} from "gestalt";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

import Accordion from "./components/Accordion";
import AppHeader from "./components/AppHeader";
import Login from "./components/Login";
import ShareCategory from "./components/ShareCategory";
import TaskFilters from "./components/TaskFilters";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskToast from "./components/TaskToast";
import { auth } from "./firebase";
import { categoryService } from "./services/categoryService";
import { sharingService } from "./services/sharingService";
import { storage } from "./utils/storage";
import { taskService } from "./services/taskService";
import { translations } from "./constants/translations";
import useIsMobile from "./utils/useIsMobile";
import { userPreferencesService } from "./services/userPreferencesService";

export default function TodoApp() {
  const [theme, setTheme] = useState(storage.get("theme", "lightWash"));
  const [language, setLanguage] = useState(storage.get("language", "pt"));
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [customCategories, setCustomCategories] = useState(
    storage.getCustomCategories()
  );

  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [groupBy, setGroupBy] = useState(storage.get("groupBy", "none"));
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const isMobile = useIsMobile();

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

  useEffect(() => {
    if (!user) {
      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setIsLoading(true);
        try {
          const syncedTasks = await taskService.syncTasks(currentUser.uid);
          setTasks(syncedTasks);
          storage.set("tasks", syncedTasks);

          const userPrefs = await userPreferencesService.getUserPreferences(
            currentUser.uid
          );
          if (userPrefs) {
            if (userPrefs.theme) setTheme(userPrefs.theme);
            if (userPrefs.language) setLanguage(userPrefs.language);
            if (userPrefs.groupBy) setGroupBy(userPrefs.groupBy);
          }

          const userCategories = await categoryService.getUserCategories(
            currentUser.uid
          );
          if (userCategories && userCategories.length > 0) {
            setCustomCategories(userCategories);
            storage.set("customCategories", userCategories);
          }

          showToastMessage(translations[language].syncSuccess);
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

  useEffect(() => {
    if (!user) {
      storage.set("tasks", tasks);
    }
  }, [tasks, user]);

  const toggleTheme = () => {
    const newTheme = theme === "lightWash" ? "dark" : "lightWash";
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLoginEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setOpenLoginModal(false);

      await userPreferencesService.ensureUserEmail(
        userCredential.user.reloadUserInfo.localId
      );
    } catch (error) {
      showToastMessage(
        `${translations[language].loginEmailError}: ${error.message}`
      );
    }
  };

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

      await userPreferencesService.saveUserPreferences(user.uid, {
        theme,
        language,
        groupBy,
      });

      await categoryService.saveCategories(user.uid, customCategories);

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

      await userPreferencesService.ensureUserEmail(
        result.user.reloadUserInfo.localId
      );
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

      const localTasks = storage.get("tasks", []);
      setTasks(localTasks);
    } catch (error) {
      console.error("Error signing out:", error);
      showToastMessage(translations[language].signOutError);
    }
  };

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
        setIsLoading(true);
        const savedTask = await taskService.addTask(newTask, user.uid);
        setTasks((prevTasks) => [...prevTasks, savedTask]);
      } else {
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
        setIsLoading(true);
        await taskService.updateTask(updatedTask, user.uid);
      }

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

  const handleAddCategory = async (category) => {
    try {
      if (user) {
        const updatedCategories = await categoryService.addCustomCategory(
          user.uid,
          category
        );
        setCustomCategories(updatedCategories);
        storage.set("customCategories", updatedCategories);
      } else {
        const updatedCategories = storage.addCustomCategory(category);
        setCustomCategories(updatedCategories);
      }
      showToastMessage(translations[language].categoryAdded);
    } catch (error) {
      console.error("Error adding category:", error);
      showToastMessage(translations[language].error);
    }
  };

  const handleRemoveCategory = async (category) => {
    try {
      const categoryInUse = tasks.some((task) => task.category === category);
      if (categoryInUse) {
        showToastMessage(translations[language].categoryInUse);
        return;
      }

      if (user) {
        const updatedCategories = await categoryService.removeCustomCategory(
          user.uid,
          category
        );
        setCustomCategories(updatedCategories);
        storage.set("customCategories", updatedCategories);
      } else {
        const updatedCategories = storage.removeCustomCategory(category);
        setCustomCategories(updatedCategories);
      }
      showToastMessage(translations[language].categoryDeleted);
    } catch (error) {
      console.error("Error removing category:", error);
      showToastMessage(translations[language].error);
    }
  };

  const handleShareCategory = async (categoryName, targetEmail) => {
    if (!user) {
      showToastMessage(translations[language].needLogin);
      return;
    }

    try {
      const shareResult = await sharingService.shareCategory(
        categoryName,
        user.uid,
        targetEmail
      );

      showToastMessage(translations[language].shareCategorySuccess);
      return shareResult;
    } catch (error) {
      console.error("Error sharing category:", error);
      let errorMsg = translations[language].shareCategoryError;

      if (error.message === "User not found") {
        errorMsg = translations[language].userNotFound;
      } else if (error.message === "Cannot share with yourself") {
        errorMsg = translations[language].cannotShareWithYourself;
      }

      showToastMessage(errorMsg);
      throw error;
    }
  };

  const handleRemoveShare = async (shareId) => {
    if (!user) {
      showToastMessage(translations[language].needLogin);
      return;
    }

    try {
      await sharingService.removeShare(shareId);
      showToastMessage(translations[language].removeShareSuccess);
    } catch (error) {
      console.error("Error removing share:", error);
      showToastMessage(translations[language].removeShareError);
      throw error;
    }
  };

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
            onOpenShareModal={setOpenShareModal}
          />

          <Login
            isOpen={openLoginModal}
            onClose={() => setOpenLoginModal(false)}
            onLoginEmail={handleLoginEmail}
            onLoginGoogle={handleLoginGoogle}
            onSignOut={handleSignOut}
            user={user}
            language={language}
          />

          <ShareCategory
            isOpen={openShareModal}
            onClose={() => setOpenShareModal(false)}
            categories={[
              ...Object.keys(translations[language].categories),
              ...customCategories,
            ]}
            language={language}
            user={user}
            onShareCategory={handleShareCategory}
            onRemoveShare={handleRemoveShare}
          />

          <Accordion
            id="forms-accordion"
            accessibilityExpandLabel="Expandir seção"
            accessibilityCollapseLabel="Recolher seção"
            defaultExpandedIndices={[0, 1]}
            items={[
              {
                icon: "edit",
                children: (
                  <TaskForm
                    onAddTask={addTask}
                    language={language}
                    isMobile={isMobile}
                    disabled={isLoading}
                    customCategories={customCategories}
                    onAddCategory={handleAddCategory}
                    onRemoveCategory={handleRemoveCategory}
                    user={user}
                  />
                ),
                title: translations[language].addTaskPlaceholder,
              },
              {
                icon: "filter",
                children: (
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
                ),
                title: translations[language].filterPlaceholder,
              },
            ]}
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
