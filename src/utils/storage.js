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

      const categoriesOrder = this.getCategoriesOrder();
      const maxOrder = Object.values(categoriesOrder).reduce(
        (max, order) => Math.max(max, order),
        0
      );
      categoriesOrder[category] = maxOrder + 1;
      this.set("categoriesOrder", categoriesOrder);
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

    const categoriesOrder = this.getCategoriesOrder();
    delete categoriesOrder[category];
    this.set("categoriesOrder", categoriesOrder);

    return updatedCategories;
  },

  getCategoriesOrder() {
    return this.get("categoriesOrder", {});
  },

  setCategoryOrder(category, order) {
    const categoriesOrder = this.getCategoriesOrder();
    categoriesOrder[category] = order;
    this.set("categoriesOrder", categoriesOrder);
    return categoriesOrder;
  },

  getSharedCategories() {
    return this.get("sharedCategories", []);
  },

  addSharedCategory(shareInfo) {
    const sharedCategories = this.getSharedCategories();
    sharedCategories.push(shareInfo);
    this.set("sharedCategories", sharedCategories);
    return sharedCategories;
  },

  removeSharedCategory(shareId) {
    const sharedCategories = this.getSharedCategories();
    const updatedShared = sharedCategories.filter(
      (share) => share.id !== shareId
    );
    this.set("sharedCategories", updatedShared);
    return updatedShared;
  },
};
