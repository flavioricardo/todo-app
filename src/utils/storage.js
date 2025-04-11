const PREFIX = "todoapp_";

export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }
  },

  get(key, defaultValue = null) {
    try {
      const stored = localStorage.getItem(`${PREFIX}${key}`);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error("Error reading from localStorage:", e);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(`${PREFIX}${key}`);
    } catch (e) {
      console.error("Error removing from localStorage:", e);
    }
  },

  addCustomCategory(category) {
    const categories = this.getCustomCategories();
    if (!categories.includes(category)) {
      categories.push(category);
      this.set("customCategories", categories);
    }
    return categories;
  },

  getCustomCategories() {
    return this.get("customCategories", []);
  },

  removeCustomCategory(category) {
    const categories = this.getCustomCategories();
    const updatedCategories = categories.filter((cat) => cat !== category);
    this.set("customCategories", updatedCategories);
    return updatedCategories;
  },
};
