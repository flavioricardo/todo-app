import React, { useState } from "react";
import { Box, Button, SelectList, TextField } from "gestalt";
import { translations } from "../constants/translations";
import { categoryColors } from "../constants/categories";
import PropTypes from "prop-types";

export default function TaskForm({ onAddTask, language, isMobile }) {
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
      justifyContent={isMobile ? "start" : "start"}
      alignItems={isMobile ? "stretch" : "center"}
      gap={isMobile ? 6 : 3}
    >
      <Box marginBottom={isMobile ? 4 : 0} width={isMobile ? "100%" : "auto"}>
        <SelectList
          id="categorySelect"
          onChange={({ value }) => setCategory(value)}
          size={isMobile ? "lg" : "md"}
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
          onChange={({ value }) => setTask(value)}
          placeholder={translations[language].addTaskPlaceholder}
          value={task}
          width="100%"
          size={isMobile ? "lg" : "md"}
        />
      </Box>

      <Button
        text={translations[language].addTask}
        onClick={handleAddTask}
        color="blue"
        fullWidth={isMobile}
        size={isMobile ? "lg" : "md"}
      />
    </Box>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};
