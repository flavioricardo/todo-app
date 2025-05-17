import {
  Box,
  Button,
  IconButton,
  SelectList,
  Spinner,
  TextField,
  Tooltip,
} from "gestalt";
import React, { useEffect, useState } from "react";

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
  user,
  isAddingTask,
  editingTask,
  onCancelEdit,
}) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState();
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [errors, setErrors] = useState({
    task: false,
    category: false,
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.text);
      setCategory(editingTask.category);
    } else {
      setTask("");
      setCategory();
    }
  }, [editingTask]);

  useEffect(() => {
    const allCats = [
      ...Object.keys(categoryColors),
      ...customCategories.filter(
        (cat) => !Object.keys(categoryColors).includes(cat)
      ),
    ];
    setAvailableCategories(allCats);
  }, [customCategories]);

  const validateForm = () => {
    const newErrors = {
      task: !task.trim(),
      category: !category,
    };

    setErrors(newErrors);
    return !newErrors.task && !newErrors.category;
  };

  const handleAddTask = () => {
    if (!validateForm()) return;
    onAddTask(task, category);
    setTask("");
    setErrors({ task: false, category: false });
  };

  const handleCategoryChange = ({ value }) => {
    setCategory(value);
    if (errors.category) {
      setErrors({ ...errors, category: false });
    }
  };

  const handleTaskChange = ({ value }) => {
    setTask(value);
    if (errors.task && value.trim()) {
      setErrors({ ...errors, task: false });
    }
  };

  const handleOpenCategoryModal = () => setShowCategoryModal(true);
  const handleCloseCategoryModal = () => setShowCategoryModal(false);

  const renderCategorySelector = () => (
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
          labelDisplay="hidden"
          label={translations[language].taskCategory}
          placeholder={translations[language].taskCategory}
          onChange={handleCategoryChange}
          size="lg"
          disabled={disabled}
          value={category}
          errorMessage={
            errors.category
              ? translations[language].categoryRequired
              : undefined
          }
          aria-label={translations[language].taskCategory}
        >
          {availableCategories.map((value) => (
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
          size="lg"
          onClick={handleOpenCategoryModal}
          disabled={disabled}
          aria-label={translations[language].manageCategories}
        />
      </Tooltip>
    </Box>
  );

  const renderTaskInput = () => (
    <Box
      flex="grow"
      paddingX={isMobile ? 0 : 2}
      marginBottom={isMobile ? 4 : 0}
      width={isMobile ? "100%" : "auto"}
    >
      <TextField
        id="taskInput"
        labelDisplay="hidden"
        label={translations[language].taskName}
        onChange={handleTaskChange}
        placeholder={translations[language].taskName}
        value={task}
        width="100%"
        size="lg"
        disabled={disabled}
        errorMessage={
          errors.task ? translations[language].taskRequired : undefined
        }
        aria-label={translations[language].taskName}
      />
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        direction={isMobile ? "column" : "row"}
        justifyContent="start"
        alignItems={isMobile ? "stretch" : "end"}
        gap={isMobile ? 6 : 3}
      >
        {renderCategorySelector()}
        {renderTaskInput()}

        <Box
          position="relative"
          display="flex"
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "stretch" : "end"}
        >
          <Button
            text={
              editingTask
                ? translations[language].saveTask
                : translations[language].addTask
            }
            onClick={handleAddTask}
            color="blue"
            fullWidth={isMobile}
            size="lg"
            disabled={disabled || !task || isAddingTask}
            aria-label={
              editingTask
                ? translations[language].saveTask
                : translations[language].addTask
            }
          />
          {!isAddingTask && editingTask && (
            <Box marginStart={isMobile ? 0 : 2} marginTop={isMobile ? 4 : 0}>
              <Button
                text={translations[language].cancel}
                color="red"
                onClick={onCancelEdit}
                size="lg"
                fullWidth={isMobile}
                disabled={disabled || isAddingTask}
                marginStart={2}
                aria-label={translations[language].cancel}
              />
            </Box>
          )}
          {isAddingTask && (
            <Box
              position="absolute"
              dangerouslySetInlineStyle={{
                __style: {
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                },
              }}
            >
              <Spinner
                show
                size="sm"
                accessibilityLabel={translations[language].addTaskPlaceholder}
              />
            </Box>
          )}
        </Box>
      </Box>

      <CategoryManagement
        isOpen={showCategoryModal}
        onClose={handleCloseCategoryModal}
        onAddCategory={onAddCategory}
        onRemoveCategory={onRemoveCategory}
        customCategories={customCategories}
        language={language}
        user={user}
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
  isAddingTask: PropTypes.bool,
  editingTask: PropTypes.shape({
    text: PropTypes.string,
    category: PropTypes.string,
  }),
  onCancelEdit: PropTypes.func,
};

TaskForm.defaultProps = {
  disabled: false,
  customCategories: [],
  isAddingTask: false,
};
