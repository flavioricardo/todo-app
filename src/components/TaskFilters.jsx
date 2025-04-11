import { Box, SearchField, SelectList } from "gestalt";

import PropTypes from "prop-types";
import React from "react";
import { translations } from "../constants/translations";

export default function TaskFilters({
  searchTerm,
  filterStatus,
  groupBy,
  onSearchChange,
  onFilterChange,
  onGroupByChange,
  language,
  isMobile,
  disabled,
}) {
  return (
    <Box
      marginTop={4}
      width="100%"
      display="flex"
      direction={isMobile ? "column" : "row"}
      gap={isMobile ? 4 : 2}
      alignItems={isMobile ? "start" : "end"}
      wrap={!isMobile}
    >
      <Box paddingX={0} marginBottom={isMobile ? 4 : 0}>
        <SearchField
          accessibilityLabel={translations[language].searchPlaceholder}
          id="searchField"
          label={translations[language].filterPlaceholder}
          onChange={({ value }) => onSearchChange(value)}
          placeholder={translations[language].searchPlaceholder}
          value={searchTerm}
          size={isMobile ? "lg" : "md"}
          disabled={disabled}
        />
      </Box>
      <Box
        paddingX={isMobile ? 0 : 2}
        marginBottom={isMobile ? 4 : 0}
        width={isMobile ? "100%" : "auto"}
      >
        <SelectList
          id="filterStatus"
          label={translations[language].taskCategory}
          onChange={({ value }) => onFilterChange(value)}
          size={isMobile ? "lg" : "md"}
          value={filterStatus}
          disabled={disabled}
        >
          <SelectList.Option label={translations[language].all} value="all" />
          <SelectList.Option
            label={translations[language].completed}
            value="completed"
          />
          <SelectList.Option
            label={translations[language].pending}
            value="pending"
          />
        </SelectList>
      </Box>
      <Box paddingX={isMobile ? 0 : 2} width={isMobile ? "100%" : "auto"}>
        <SelectList
          id="groupBy"
          label={translations[language].groupBy}
          onChange={({ value }) => onGroupByChange(value)}
          size={isMobile ? "lg" : "md"}
          value={groupBy}
          disabled={disabled}
        >
          <SelectList.Option
            label={translations[language].groupByNone}
            value="none"
          />
          <SelectList.Option
            label={translations[language].groupByCategory}
            value="category"
          />
        </SelectList>
      </Box>
    </Box>
  );
}

TaskFilters.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  groupBy: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onGroupByChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  disabled: PropTypes.bool,
};

TaskFilters.defaultProps = {
  disabled: false,
  groupBy: "none",
};
