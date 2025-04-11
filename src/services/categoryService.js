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
      const categoriesOrder = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        categories.push(data.name);
        if (data.order !== undefined) {
          categoriesOrder[data.name] = data.order;
        } else {
          categoriesOrder[data.name] = 999;
        }
      });

      if (categories.length === 0) {
        return storage.getCustomCategories();
      }

      storage.set("categoriesOrder", categoriesOrder);

      return categories;
    } catch (error) {
      console.error("Error getting user categories:", error);
      throw error;
    }
  },

  async addCustomCategory(userId, category) {
    try {
      const categoriesOrder = storage.getCategoriesOrder();
      const maxOrder = Object.values(categoriesOrder).reduce(
        (max, order) => Math.max(max, order),
        0
      );
      const newOrder = maxOrder + 1;

      const categoryDoc = doc(db, COLLECTION_NAME, `${userId}_${category}`);
      await setDoc(categoryDoc, {
        userId,
        name: category,
        order: newOrder,
        createdAt: serverTimestamp(),
      });

      const existingCategories = storage.getCustomCategories();
      if (!existingCategories.includes(category)) {
        storage.set("customCategories", [...existingCategories, category]);
        storage.setCategoryOrder(category, newOrder);
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

      const categoriesOrder = storage.getCategoriesOrder();
      delete categoriesOrder[category];
      storage.set("categoriesOrder", categoriesOrder);

      return await this.getUserCategories(userId);
    } catch (error) {
      console.error("Error removing custom category:", error);
      throw error;
    }
  },

  getCategoryOrderMap() {
    const defaultOrder = {
      personal_care: 10,
      meal: 20,
      work: 30,
      household_chores: 40,
      transportation: 50,
      physical_activity: 60,
      social_interaction: 70,
    };

    const customOrders = storage.getCategoriesOrder();
    return { ...defaultOrder, ...customOrders };
  },

  sortCategoriesByOrder(categories) {
    const orderMap = this.getCategoryOrderMap();

    return [...categories].sort((a, b) => {
      const orderA = orderMap[a] !== undefined ? orderMap[a] : 999;
      const orderB = orderMap[b] !== undefined ? orderMap[b] : 999;
      return orderA - orderB;
    });
  },
};
