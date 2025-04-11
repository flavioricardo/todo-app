import { Box, Button, SelectList, TextField } from "gestalt";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { categoryColors } from "../constants/categories";
import { translations } from "../constants/translations";

export default function TaskForm({ onAddTask, language, isMobile, disabled }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(Object.keys(categoryColors)[0]);

  const handleAddTask = () => {
    if (!task) return;
    onAddTask(task, category);
    setTask("");
  };

  return (
    <Box
      marginTop={4}
      display="flex"
      direction={isMobile ? "column" : "row"}
      justifyContent="start"
      alignItems={isMobile ? "stretch" : "end"}
      gap={isMobile ? 6 : 3}
    >
      <Box marginBottom={isMobile ? 4 : 0} width={isMobile ? "100%" : "auto"}>
        <SelectList
          id="categorySelect"
          label={translations[language].taskCategory}
          onChange={({ value }) => setCategory(value)}
          size={isMobile ? "lg" : "md"}
          disabled={disabled}
        >
          {Object.keys(categoryColors).map((value) => (
            <SelectList.Option
              key={value}
              label={translations[language].categories[value]}
              value={value}
            />
          ))}
        </SelectList>
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
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  disabled: PropTypes.bool,
};

TaskForm.defaultProps = {
  disabled: false,
};
