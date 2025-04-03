import React from "react";
import { Badge, Box, Button, Checkbox, Fieldset } from "gestalt";
import { translations } from "../constants/translations";
import { getCategoryColor } from "../constants/categories";
import PropTypes from "prop-types";

export default function TaskList({
  tasks,
  onToggleTask,
  onClearCompleted,
  filterStatus,
  language,
  isMobile,
}) {
  return (
    <>
      <Box marginTop={4} width="100%">
        <Fieldset legend={translations[language].taskList}>
          {tasks.length
            ? tasks.map((task) => (
                <Box
                  key={task.id}
                  display="flex"
                  alignItems="center"
                  justifyContent="between"
                  padding={2}
                >
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    label={task.text}
                    onChange={() => onToggleTask(task.id)}
                  />
                  <Badge
                    text={translations[language].categories[task.category]}
                    type={getCategoryColor(task.category)}
                  />
                </Box>
              ))
            : null}
        </Fieldset>
      </Box>

      {tasks.some((task) => task.completed) && filterStatus !== "pending" && (
        <Box marginTop={4} width="100%" display="flex">
          <Button
            text={translations[language].clearCompleted}
            onClick={onClearCompleted}
            color="red"
            fullWidth={isMobile}
            size={isMobile ? "lg" : "md"}
          />
        </Box>
      )}
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};
