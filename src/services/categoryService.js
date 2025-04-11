import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase";
import { storage } from "../utils/storage";

const COLLECTION_NAME = "categories";

export const categoryService = {
  async getUserCategories(userId) {
    try {
      const categoriesRef = collection(db, COLLECTION_NAME);
      const q = query(categoriesRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push(doc.data().name);
      });

      if (categories.length === 0) {
        return storage.getCustomCategories();
      }

      return categories;
    } catch (error) {
      console.error("Error getting user categories:", error);
      throw error;
    }
  },

  async addCustomCategory(userId, category) {
    try {
      const categoryDoc = doc(db, COLLECTION_NAME, `${userId}_${category}`);
      await setDoc(categoryDoc, {
        userId,
        name: category,
        createdAt: serverTimestamp(),
      });

      const existingCategories = storage.getCustomCategories();
      if (!existingCategories.includes(category)) {
        storage.set("customCategories", [...existingCategories, category]);
      }

      return await this.getUserCategories(userId);
    } catch (error) {
      console.error("Error adding custom category:", error);
      throw error;
    }
  },

  async removeCustomCategory(userId, category) {
    try {
      const categoryDoc = doc(db, COLLECTION_NAME, `${userId}_${category}`);
      await deleteDoc(categoryDoc);

      const existingCategories = storage.getCustomCategories();
      storage.set(
        "customCategories",
        existingCategories.filter((cat) => cat !== category)
      );

      return await this.getUserCategories(userId);
    } catch (error) {
      console.error("Error removing custom category:", error);
      throw error;
    }
  },
};
