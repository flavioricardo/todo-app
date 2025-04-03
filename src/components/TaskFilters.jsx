import React from "react";
import { Box, Label, SearchField, SelectList, Text } from "gestalt";
import { translations } from "../constants/translations";
import PropTypes from "prop-types";

export default function TaskFilters({
  searchTerm,
  filterStatus,
  onSearchChange,
  onFilterChange,
  language,
  isMobile,
}) {
  return (
    <Box
      marginTop={4}
      width="100%"
      display="flex"
      direction={isMobile ? "column" : "row"}
      gap={isMobile ? 4 : 2}
    >
      <Box paddingX={isMobile ? 0 : 2} marginBottom={isMobile ? 4 : 0}>
        <Label htmlFor="searchField">
          <Text>{translations[language].filterPlaceholder}</Text>
        </Label>
      </Box>
      <Box paddingX={0} marginBottom={isMobile ? 4 : 0}>
        <SearchField
          accessibilityLabel={translations[language].searchPlaceholder}
          id="searchField"
          onChange={({ value }) => onSearchChange(value)}
          placeholder={translations[language].searchPlaceholder}
          value={searchTerm}
          size={isMobile ? "lg" : "md"}
        />
      </Box>
      <Box paddingX={isMobile ? 0 : 2}>
        <SelectList
          id="filterStatus"
          onChange={({ value }) => onFilterChange(value)}
          size={isMobile ? "lg" : "md"}
          value={filterStatus}
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
    </Box>
  );
}

TaskFilters.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};
