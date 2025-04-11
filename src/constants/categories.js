export const availableBadgeColors = [
  "info",
  "error",
  "warning",
  "success",
  "neutral",
  "recommendation",
  "darkWash",
  "lightWash",
];

export const categoryColors = {
  personal_care: "info",
  meal: "success",
  work: "error",
  household_chores: "warning",
  transportation: "recommendation",
  physical_activity: "darkWash",
  social_interaction: "neutral",
};

const customCategoryColors = new Map();

export const getCategoryColor = (categoryValue) => {
  if (categoryColors[categoryValue]) {
    return categoryColors[categoryValue];
  }

  if (customCategoryColors.has(categoryValue)) {
    return customCategoryColors.get(categoryValue);
  }

  const randomColor =
    availableBadgeColors[
      Math.floor(Math.random() * availableBadgeColors.length)
    ];
  customCategoryColors.set(categoryValue, randomColor);

  return randomColor;
};
