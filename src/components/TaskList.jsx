import { Badge, Box, Button, Checkbox, IconButton, Text } from "gestalt";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { categoryService } from "../services/categoryService";
import { getCategoryColor } from "../constants/categories";
import { translations } from "../constants/translations";

const CompletedTextStyle = ({ children, isCompleted }) => {
  const ref = React.useRef(null);

  return (
    <div
      ref={ref}
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
      }}
    >
      <Text overflow="breakWord" lineClamp={2}>
        {children}
      </Text>
    </div>
  );
};

const TaskItem = ({ task, onToggleTask, showCategory, language }) => {
  const isCompleted = task.completed;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      padding={2}
      opacity={isCompleted ? 0.6 : 1}
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={isCompleted}
        label={
          <CompletedTextStyle isCompleted={isCompleted}>
            {task.text}
          </CompletedTextStyle>
        }
        onChange={() => onToggleTask(task.id)}
      />
      {showCategory && (
        <Badge
          text={
            translations[language].categories[task.category] || task.category
          }
          type={getCategoryColor(task.category)}
        />
      )}
    </Box>
  );
};

const CategoryGroup = ({
  category,
  tasks,
  onToggleTask,
  language,
  isMobile,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <Box
      marginBottom={2}
      marginEnd={2}
      borderStyle="shadow"
      color="elevationFloating"
      rounding={3}
      padding={3}
      userSelect="none"
      flex="grow"
      column={!isMobile && !isExpanded ? 3 : 12}
      width={isExpanded ? "100%" : undefined}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        marginBottom={1}
      >
        <Text size="sm">
          <Badge
            text={translations[language].categories[category] || category}
            type={getCategoryColor(category)}
          />
        </Text>
        <IconButton
          size="sm"
          selected={isExpanded}
          icon={isExpanded ? "minimize" : "maximize"}
          onClick={() => onToggleExpand(category)}
          accessibilityLabel={
            isExpanded
              ? translations[language].minimize
              : translations[language].expand
          }
        />
      </Box>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          showCategory={false}
          language={language}
        />
      ))}
    </Box>
  );
};

const EmptyTaskList = ({ language }) => (
  <Box padding={3} display="flex" justifyContent="center">
    <Text>{translations[language].emptyTaskList}</Text>
  </Box>
);

export default function TaskList({
  tasks,
  onToggleTask,
  onClearCompleted,
  filterStatus,
  groupBy,
  language,
  isMobile,
}) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategoryExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getTasksByCategory = () => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.category]) {
        acc[task.category] = [];
      }
      acc[task.category].push(task);
      return acc;
    }, {});
  };

  const sortTasksByCompletion = (tasksToSort) => {
    return [...tasksToSort].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  };

  const renderTaskList = () => {
    if (tasks.length === 0) {
      return <EmptyTaskList language={language} />;
    }

    if (groupBy === "category") {
      const tasksByCategory = getTasksByCategory();

      const orderedCategories = categoryService.sortCategoriesByOrder(
        Object.keys(tasksByCategory)
      );

      const reorderedCategories = [...orderedCategories].sort((a, b) => {
        if (expandedCategory === a) return -1;
        if (expandedCategory === b) return 1;
        return orderedCategories.indexOf(a) - orderedCategories.indexOf(b);
      });

      return reorderedCategories.map((category) => (
        <CategoryGroup
          key={category}
          category={category}
          tasks={sortTasksByCompletion(tasksByCategory[category])}
          onToggleTask={onToggleTask}
          language={language}
          isMobile={isMobile}
          isExpanded={expandedCategory === category}
          onToggleExpand={toggleCategoryExpand}
        />
      ));
    }

    return sortTasksByCompletion(tasks).map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggleTask={onToggleTask}
        showCategory={groupBy !== "category"}
        language={language}
      />
    ));
  };

  const hasCompletedTasks = tasks.some((task) => task.completed);
  const shouldShowClearButton = hasCompletedTasks && filterStatus !== "pending";

  return (
    <>
      <Box marginTop={4} width="100%">
        <Box marginBottom={2}>
          <Text size="100">{translations[language].taskList}</Text>
        </Box>
        <Box
          display={!isMobile && groupBy === "category" ? "flex" : undefined}
          wrap={!isMobile && groupBy === "category" ? "wrap" : undefined}
          legend={translations[language].taskList}
        >
          {renderTaskList()}
        </Box>
      </Box>

      {shouldShowClearButton && (
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

CompletedTextStyle.propTypes = {
  children: PropTypes.node.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  showCategory: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

CategoryGroup.propTypes = {
  category: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onToggleExpand: PropTypes.func.isRequired,
};

EmptyTaskList.propTypes = {
  language: PropTypes.string.isRequired,
};

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
  isMobile: false,
};
