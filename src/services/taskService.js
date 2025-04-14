import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";

import { db } from "../firebase";
import { sharingService } from "./sharingService";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "tasks";

export const taskService = {
  async getUserTasks(userId) {
    try {
      // Buscar tarefas do usuário
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

      // Buscar categorias compartilhadas com o usuário
      const sharedWithMe = await sharingService.getSharedWithMe(userId);

      // Para cada compartilhamento, buscar tarefas da categoria
      for (const share of sharedWithMe) {
        const sharedTasksQuery = query(
          collection(db, COLLECTION_NAME),
          where("userId", "==", share.ownerUid),
          where("category", "==", share.categoryName)
        );

        const sharedSnapshot = await getDocs(sharedTasksQuery);

        sharedSnapshot.forEach((doc) => {
          const taskData = doc.data();
          tasks.push({
            ...taskData,
            id: doc.id,
            firebaseId: doc.id,
            sharedBy: share.ownerUid,
            sharedByEmail: share.targetEmail, // Para mostrar quem compartilhou
            isShared: true,
          });
        });
      }

      return tasks;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

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
      console.error("Error adding task:", error);
      throw error;
    }
  },

  async updateTask(task, userId) {
    try {
      const { firebaseId } = task;
      if (!firebaseId) {
        throw new Error("Firebase ID missing");
      }

      const taskRef = doc(db, COLLECTION_NAME, firebaseId);
      await updateDoc(taskRef, {
        ...task,
        userId,
        updatedAt: serverTimestamp(),
      });

      return task;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  },

  async deleteTask(taskId) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, taskId));
      return taskId;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  },

  async syncTasks(userId) {
    try {
      const localTasks = storage.get("tasks", []);

      if (localTasks.length === 0) {
        return await this.getUserTasks(userId);
      }

      const remoteTasks = await this.getUserTasks(userId);

      const batch = writeBatch(db);
      const tasksToAdd = localTasks.filter(
        (localTask) =>
          !localTask.firebaseId &&
          !remoteTasks.some((remoteTask) => remoteTask.id === localTask.id) &&
          !localTask.isShared // Não sincronizar tarefas compartilhadas
      );

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

      await batch.commit();

      const mergedTasks = [...remoteTasks];

      for (const localTask of localTasks) {
        if (localTask.firebaseId && !localTask.isShared) {
          const index = mergedTasks.findIndex(
            (t) => t.firebaseId === localTask.firebaseId
          );
          if (index >= 0) {
            mergedTasks[index] = localTask;
          }
        } else if (!localTask.isShared) {
          mergedTasks.push(localTask);
        }
      }

      return mergedTasks;
    } catch (error) {
      console.error("Error syncing tasks:", error);
      throw error;
    }
  },

  async syncTaskList(tasks, userId) {
    try {
      const batch = writeBatch(db);

      for (const task of tasks) {
        if (task.firebaseId) {
          const taskRef = doc(db, COLLECTION_NAME, task.firebaseId);
          batch.update(taskRef, {
            ...task,
            userId,
            updatedAt: serverTimestamp(),
          });
        } else {
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
      console.error("Error syncing task list:", error);
      throw error;
    }
  },
};
