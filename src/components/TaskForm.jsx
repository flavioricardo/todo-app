import {
  Box,
  Button,
  IconButton,
  SelectList,
  TextField,
  Tooltip,
} from "gestalt";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { categoryColors } from "../constants/categories";
import { translations } from "../constants/translations";
import CategoryManagement from "./CategoryManagement";

export default function TaskForm({
  onAddTask,
  language,
  isMobile,
  disabled,
  customCategories,
  onAddCategory,
  onRemoveCategory,
}) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleAddTask = () => {
    if (!task) return;
    onAddTask(task, category);
    setTask("");
  };

  const allCategories = [
    ...Object.keys(categoryColors),
    ...customCategories.filter(
      (cat) => !Object.keys(categoryColors).includes(cat)
    ),
  ];

  return (
    <>
      <Box
        marginTop={4}
        display="flex"
        direction={isMobile ? "column" : "row"}
        justifyContent="start"
        alignItems={isMobile ? "stretch" : "end"}
        gap={isMobile ? 6 : 3}
      >
        <Box
          marginBottom={isMobile ? 4 : 0}
          width={isMobile ? "100%" : "auto"}
          display="flex"
          direction="row"
          gap={2}
          alignItems="end"
        >
          <Box marginEnd={!isMobile && 2} flex="grow">
            <SelectList
              id="categorySelect"
              label={translations[language].taskCategory}
              onChange={({ value }) => setCategory(value)}
              size={isMobile ? "lg" : "md"}
              disabled={disabled}
              value={category}
            >
              {allCategories.map((value) => (
                <SelectList.Option
                  key={value}
                  label={translations[language].categories[value] || value}
                  value={value}
                />
              ))}
            </SelectList>
          </Box>
          <Tooltip text={translations[language].manageCategories}>
            <IconButton
              accessibilityLabel={translations[language].manageCategories}
              icon="add"
              size="md"
              onClick={() => setShowCategoryModal(true)}
              disabled={disabled}
            />
          </Tooltip>
        </Box>

        <Box
          flex="grow"
          paddingX={isMobile ? 0 : 2}
          marginBottom={isMobile ? 4 : 0}
          width={isMobile ? "100%" : "auto"}
        >
          <TextField
            id="taskInput"
            label={translations[language].taskName}
            onChange={({ value }) => setTask(value)}
            placeholder={translations[language].addTaskPlaceholder}
            value={task}
            width="100%"
            size={isMobile ? "lg" : "md"}
            disabled={disabled}
          />
        </Box>

        <Button
          text={translations[language].addTask}
          onClick={handleAddTask}
          color="blue"
          fullWidth={isMobile}
          size={isMobile ? "lg" : "md"}
          disabled={disabled || !task}
        />
      </Box>

      <CategoryManagement
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onAddCategory={onAddCategory}
        onRemoveCategory={onRemoveCategory}
        customCategories={customCategories}
        language={language}
      />
    </>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  disabled: PropTypes.bool,
  customCategories: PropTypes.array,
  onAddCategory: PropTypes.func.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
  user: PropTypes.object,
};

TaskForm.defaultProps = {
  disabled: false,
  customCategories: [],
};
