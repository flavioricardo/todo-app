import { Badge, Box, Button, Checkbox, Fieldset, Text } from "gestalt";

import PropTypes from "prop-types";
import React from "react";
import { getCategoryColor } from "../constants/categories";
import { translations } from "../constants/translations";

export default function TaskList({
  tasks,
  onToggleTask,
  onClearCompleted,
  filterStatus,
  groupBy,
  language,
  isMobile,
}) {
  const renderTaskItem = (task) => (
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
      {groupBy !== "category" && (
        <Badge
          text={translations[language].categories[task.category]}
          type={getCategoryColor(task.category)}
        />
      )}
    </Box>
  );

  const renderTaskList = () => {
    if (tasks.length === 0) {
      return (
        <Box padding={3} display="flex" justifyContent="center">
          <Text>{translations[language].emptyTaskList}</Text>
        </Box>
      );
    }

    if (groupBy === "category") {
      // Agrupar tarefas por categoria
      const tasksByCategory = {};

      tasks.forEach((task) => {
        if (!tasksByCategory[task.category]) {
          tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
      });

      return Object.keys(tasksByCategory).map((category) => (
        <Box key={category} marginBottom={4}>
          <Box marginBottom={1}>
            <Text size="sm">
              <Badge
                text={translations[language].categories[category]}
                type={getCategoryColor(category)}
              />
            </Text>
          </Box>
          {tasksByCategory[category].map(renderTaskItem)}
        </Box>
      ));
    } else {
      return tasks.map(renderTaskItem);
    }
  };

  return (
    <>
      <Box marginTop={4} width="100%">
        <Fieldset legend={translations[language].taskList}>
          {renderTaskList()}
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
  groupBy: PropTypes.string,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};

TaskList.defaultProps = {
  groupBy: "none",
};
