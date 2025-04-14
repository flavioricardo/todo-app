import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";

import { db } from "../firebase";

const COLLECTION_NAME = "sharing";
const USERS_COLLECTION = "users";

export const sharingService = {
  async shareCategory(categoryName, ownerUid, targetEmail) {
    try {
      // Verificar se o usuário de destino existe
      const usersQuery = query(
        collection(db, USERS_COLLECTION),
        where("email", "==", targetEmail)
      );
      const userSnapshot = await getDocs(usersQuery);

      if (userSnapshot.empty) {
        throw new Error("User not found");
      }

      const targetUid = userSnapshot.docs[0].id;

      // Evitar compartilhar com si mesmo
      if (targetUid === ownerUid) {
        throw new Error("Cannot share with yourself");
      }

      // Criar documento de compartilhamento
      const shareDoc = {
        categoryName,
        ownerUid,
        targetUid,
        targetEmail,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, COLLECTION_NAME), shareDoc);

      // Após criar o documento de compartilhamento, atualize todas as tarefas
      const tasksQuery = query(
        collection(db, "tasks"),
        where("userId", "==", ownerUid),
        where("category", "==", categoryName)
      );

      const taskDocs = await getDocs(tasksQuery);
      const batch = writeBatch(db);

      taskDocs.forEach((taskDoc) => {
        const taskRef = doc(db, "tasks", taskDoc.id);
        const currentData = taskDoc.data();
        const sharedWith = currentData.sharedWith || [];

        if (!sharedWith.includes(targetUid)) {
          batch.update(taskRef, {
            sharedWith: [...sharedWith, targetUid],
          });
        }
      });

      await batch.commit();

      return {
        id: docRef.id,
        ...shareDoc,
      };
    } catch (error) {
      console.error("Error sharing category:", error);
      throw error;
    }
  },

  async getSharedWithMe(currentUserUid) {
    try {
      const sharesQuery = query(
        collection(db, COLLECTION_NAME),
        where("targetUid", "==", currentUserUid)
      );

      const querySnapshot = await getDocs(sharesQuery);
      const shares = [];

      querySnapshot.forEach((doc) => {
        shares.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return shares;
    } catch (error) {
      console.error("Error getting shared categories:", error);
      throw error;
    }
  },

  async getMyShares(ownerUid) {
    try {
      const sharesQuery = query(
        collection(db, COLLECTION_NAME),
        where("ownerUid", "==", ownerUid)
      );

      const querySnapshot = await getDocs(sharesQuery);
      const shares = [];

      querySnapshot.forEach((doc) => {
        shares.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return shares;
    } catch (error) {
      console.error("Error getting my shares:", error);
      throw error;
    }
  },

  async removeShare(shareId) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, shareId));
      return shareId;
    } catch (error) {
      console.error("Error removing share:", error);
      throw error;
    }
  },

  async getUserByEmail(email) {
    try {
      const usersQuery = query(
        collection(db, USERS_COLLECTION),
        where("email", "==", email)
      );

      const querySnapshot = await getDocs(usersQuery);

      if (querySnapshot.empty) {
        return null;
      }

      return {
        uid: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data(),
      };
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw error;
    }
  },
};
