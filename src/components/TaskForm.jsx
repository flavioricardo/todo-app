import {
  Box,
  Button,
  IconButton,
  SelectList,
  TextField,
  Tooltip,
} from "gestalt";
import React, { useEffect, useState } from "react";

import CategoryManagement from "./CategoryManagement";
import PropTypes from "prop-types";
import { categoryColors } from "../constants/categories";
import { translations } from "../constants/translations";

export default function TaskForm({
  onAddTask,
  language,
  isMobile,
  disabled,
  customCategories,
  onAddCategory,
  onRemoveCategory,
  user,
}) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState();
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    const allCats = [
      ...Object.keys(categoryColors),
      ...customCategories.filter(
        (cat) => !Object.keys(categoryColors).includes(cat)
      ),
    ];
    setAvailableCategories(allCats);
  }, [customCategories]);

  const handleAddTask = () => {
    if (!task) return;
    onAddTask(task, category);
    setTask("");
  };

  const handleCategoryChange = ({ value }) => setCategory(value);
  const handleTaskChange = ({ value }) => setTask(value);
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

        <Button
          text={translations[language].addTask}
          onClick={handleAddTask}
          color="blue"
          fullWidth={isMobile}
          size="lg"
          disabled={disabled || !task}
        />
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
};

TaskForm.defaultProps = {
  disabled: false,
  customCategories: [],
};
