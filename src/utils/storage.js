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
};
