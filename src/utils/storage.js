const PREFIX = "todoapp_";

export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    } catch (e) {
      console.error("Erro ao salvar no localStorage:", e);
    }
  },

  get(key, defaultValue = null) {
    try {
      const stored = localStorage.getItem(`${PREFIX}${key}`);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error("Erro ao ler do localStorage:", e);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(`${PREFIX}${key}`);
    } catch (e) {
      console.error("Erro ao remover do localStorage:", e);
    }
  },
};
