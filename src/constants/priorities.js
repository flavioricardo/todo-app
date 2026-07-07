export const PRIORITIES = ["high", "medium", "low"];

export const priorityBadgeType = {
  high: "error",
  medium: "warning",
  low: "info",
};

export const priorityRank = {
  high: 0,
  medium: 1,
  low: 2,
};

export const priorityLabelKey = {
  high: "priorityHigh",
  medium: "priorityMedium",
  low: "priorityLow",
};

/**
 * Compara tarefas por prioridade (high > medium > low > sem prioridade)
 * e, em empate, pela data limite mais próxima.
 */
export const compareByPriorityAndDueDate = (a, b) => {
  const rankA = a.priority in priorityRank ? priorityRank[a.priority] : 3;
  const rankB = b.priority in priorityRank ? priorityRank[b.priority] : 3;
  if (rankA !== rankB) return rankA - rankB;

  if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
  if (a.dueDate) return -1;
  if (b.dueDate) return 1;
  return 0;
};

/**
 * Status da data limite: "overdue", "today" ou null.
 * dueDate esperado no formato YYYY-MM-DD.
 */
export const getDueDateStatus = (dueDate) => {
  if (!dueDate) return null;
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  if (dueDate < today) return "overdue";
  if (dueDate === today) return "today";
  return null;
};
