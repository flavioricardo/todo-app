import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "users";

export const userPreferencesService = {
  async getUserPreferences(userId) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      const docSnap = await getDoc(userPrefsRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return {
          theme: storage.get("theme", "lightWash"),
          language: storage.get("language", "pt"),
        };
      }
    } catch (error) {
      console.error("Error getting user preferences:", error);
      throw error;
    }
  },

  async saveUserPreferences(userId, preferences) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);

      // Garantir que o email do usuário seja armazenado
      const auth = getAuth();
      const currentUser = auth.currentUser;
      let userEmail = null;

      if (currentUser && currentUser.email) {
        userEmail = currentUser.email;
      }

      const dataToSave = {
        ...preferences,
        updatedAt: serverTimestamp(),
      };

      // Adicionar email apenas se estiver disponível e não for null/undefined
      if (userEmail) {
        dataToSave.email = userEmail;
      }

      await setDoc(userPrefsRef, dataToSave, { merge: true });

      return preferences;
    } catch (error) {
      console.error("Error saving user preferences:", error);
      throw error;
    }
  },

  async updatePreference(userId, key, value) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);

      // Obter o documento atual para verificar se já existe email
      const docSnap = await getDoc(userPrefsRef);
      const updateData = {
        [key]: value,
        updatedAt: serverTimestamp(),
      };

      // Se o documento não existe ou não tem email, adicione o email do usuário atual
      if (!docSnap.exists() || !docSnap.data().email) {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser && currentUser.email) {
          updateData.email = currentUser.email;
        }
      }

      await setDoc(userPrefsRef, updateData, { merge: true });

      return { [key]: value };
    } catch (error) {
      console.error(`Error updating preference ${key}:`, error);
      throw error;
    }
  },

  // Método específico para garantir que o email esteja salvo
  async ensureUserEmail(userId) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      const docSnap = await getDoc(userPrefsRef);

      // Se já existe um documento com email, não faz nada
      if (docSnap.exists() && docSnap.data().email) {
        return docSnap.data().email;
      }

      // Caso contrário, tenta salvar o email
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser && currentUser.email) {
        await setDoc(
          userPrefsRef,
          {
            email: currentUser.email,
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );

        return currentUser.email;
      }

      return null;
    } catch (error) {
      console.error("Error ensuring user email:", error);
      throw error;
    }
  },
};
