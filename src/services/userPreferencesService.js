import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "users";

export const userPreferencesService = {
  // Obter preferências do usuário
  async getUserPreferences(userId) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      const docSnap = await getDoc(userPrefsRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // Se não existir, retorna valores padrão
        return {
          theme: storage.get("theme", "lightWash"),
          language: storage.get("language", "pt"),
        };
      }
    } catch (error) {
      console.error("Erro ao obter preferências do usuário:", error);
      throw error;
    }
  },

  // Salvar preferências do usuário
  async saveUserPreferences(userId, preferences) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      await setDoc(
        userPrefsRef,
        {
          ...preferences,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      return preferences;
    } catch (error) {
      console.error("Erro ao salvar preferências do usuário:", error);
      throw error;
    }
  },

  // Atualizar uma única preferência
  async updatePreference(userId, key, value) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      await setDoc(
        userPrefsRef,
        {
          [key]: value,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      return { [key]: value };
    } catch (error) {
      console.error(`Erro ao atualizar preferência ${key}:`, error);
      throw error;
    }
  },
};
