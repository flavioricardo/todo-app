import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "tasks";

export const taskService = {
  // Obter todas as tarefas do usuário
  async getUserTasks(userId) {
    try {
      const tasksQuery = query(
        collection(db, COLLECTION_NAME),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(tasksQuery);

      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({
          ...doc.data(),
          id: doc.id,
          firebaseId: doc.id,
        });
      });

      return tasks;
    } catch (error) {
      console.error("Erro ao obter tarefas:", error);
      throw error;
    }
  },

  // Adicionar uma nova tarefa
  async addTask(task, userId) {
    try {
      const taskWithMeta = {
        ...task,
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(
        collection(db, COLLECTION_NAME),
        taskWithMeta
      );
      return { ...task, id: docRef.id, firebaseId: docRef.id };
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      throw error;
    }
  },

  // Atualizar uma tarefa existente
  async updateTask(task, userId) {
    try {
      const { firebaseId } = task;
      if (!firebaseId) {
        throw new Error("ID do Firebase ausente");
      }

      const taskRef = doc(db, COLLECTION_NAME, firebaseId);
      await updateDoc(taskRef, {
        ...task,
        userId,
        updatedAt: serverTimestamp(),
      });

      return task;
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      throw error;
    }
  },

  // Excluir uma tarefa
  async deleteTask(taskId) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, taskId));
      return taskId;
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      throw error;
    }
  },

  // Sincronizar tarefas locais com o Firestore quando o usuário faz login
  async syncTasks(userId) {
    try {
      // Obter tarefas locais
      const localTasks = storage.get("tasks", []);

      // Se não houver tarefas locais, apenas carregar do Firebase
      if (localTasks.length === 0) {
        return await this.getUserTasks(userId);
      }

      // Obter tarefas remotas
      const remoteTasks = await this.getUserTasks(userId);

      // Comparar e mesclar tarefas
      const batch = writeBatch(db);
      const tasksToAdd = localTasks.filter(
        (localTask) =>
          !localTask.firebaseId &&
          !remoteTasks.some((remoteTask) => remoteTask.id === localTask.id)
      );

      // Adicionar novas tarefas em lote
      for (const task of tasksToAdd) {
        const taskWithMeta = {
          ...task,
          userId,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };

        const docRef = doc(collection(db, COLLECTION_NAME));
        batch.set(docRef, taskWithMeta);
        task.firebaseId = docRef.id;
      }

      // Commit das alterações em lote
      await batch.commit();

      // Mesclar tarefas remotas e locais
      const mergedTasks = [...remoteTasks];

      for (const localTask of localTasks) {
        if (localTask.firebaseId) {
          const index = mergedTasks.findIndex(
            (t) => t.firebaseId === localTask.firebaseId
          );
          if (index >= 0) {
            mergedTasks[index] = localTask;
          }
        } else {
          mergedTasks.push(localTask);
        }
      }

      return mergedTasks;
    } catch (error) {
      console.error("Erro ao sincronizar tarefas:", error);
      throw error;
    }
  },

  // Sincronizar uma lista completa de tarefas
  async syncTaskList(tasks, userId) {
    try {
      const batch = writeBatch(db);

      for (const task of tasks) {
        if (task.firebaseId) {
          // Atualizar tarefa existente
          const taskRef = doc(db, COLLECTION_NAME, task.firebaseId);
          batch.update(taskRef, {
            ...task,
            userId,
            updatedAt: serverTimestamp(),
          });
        } else {
          // Adicionar nova tarefa
          const taskWithMeta = {
            ...task,
            userId,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };

          const docRef = doc(collection(db, COLLECTION_NAME));
          batch.set(docRef, taskWithMeta);
          task.firebaseId = docRef.id;
        }
      }

      await batch.commit();
      return tasks;
    } catch (error) {
      console.error("Erro ao sincronizar lista de tarefas:", error);
      throw error;
    }
  },
};
