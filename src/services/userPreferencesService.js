import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "../firebase";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "users";

export const userPreferencesService = {
  // Get user preferences
  async getUserPreferences(userId) {
    try {
      const userPrefsRef = doc(db, COLLECTION_NAME, userId);
      const docSnap = await getDoc(userPrefsRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // Return defaults if not exists
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

  // Save user preferences
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
      console.error("Error saving user preferences:", error);
      throw error;
    }
  },

  // Update single preference
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
      console.error(`Error updating preference ${key}:`, error);
      throw error;
    }
  },
};
