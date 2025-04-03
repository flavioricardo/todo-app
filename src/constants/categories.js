export const categoryColors = {
  personal_care: "info",
  meal: "success",
  work: "error",
  household_chores: "warning",
  transportation: "recommendation",
  physical_activity: "darkWash",
  social_interaction: "neutral",
};

export const getCategoryColor = (categoryValue) => {
  if (!categoryColors[categoryValue]) {
    console.warn(`Unknown category: ${categoryValue}`);
  }
  return categoryColors[categoryValue] || "neutral";
};
