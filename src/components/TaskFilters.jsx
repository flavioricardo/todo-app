import { Box, Flex, IconButton, SearchField, SelectList } from "gestalt";

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
  const selectSize = "lg";
  const mobileWidth = "100%";
  const defaultWidth = "auto";

  return (
    <Box
      width="100%"
      display="flex"
      direction={isMobile ? "column" : "row"}
      gap={isMobile ? 4 : 2}
      alignItems={isMobile ? "start" : "end"}
      wrap={!isMobile}
    >
      <Flex wrap flex="grow" width={isMobile ? mobileWidth : defaultWidth}>
        <Box
          flex="grow"
          marginEnd={isMobile ? 0 : 2}
          marginBottom={isMobile ? 4 : 0}
        >
          <SearchField
            id="searchField"
            accessibilityLabel={translations[language].searchPlaceholder}
            aria-label={translations[language].searchPlaceholder}
            onChange={({ value }) => onSearchChange(value)}
            placeholder={translations[language].searchPlaceholder}
            value={searchTerm}
            size={selectSize}
            disabled={disabled}
          />
        </Box>
      </Flex>

      <Box
        paddingX={isMobile ? 0 : 2}
        marginBottom={isMobile ? 4 : 0}
        width={isMobile ? mobileWidth : defaultWidth}
      >
        <SelectList
          id="filterStatus"
          labelDisplay="hidden"
          label={translations[language].taskCategory}
          placeholder={translations[language].taskCategory}
          onChange={({ value }) => onFilterChange(value)}
          size={selectSize}
          value={filterStatus}
          disabled={disabled}
          aria-label={translations[language].taskCategory}
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

      <Box
        flex="grow"
        display="flex"
        direction="row"
        alignItems="center"
        paddingX={isMobile ? 0 : 2}
        width={isMobile ? mobileWidth : defaultWidth}
      >
        <Flex
          wrap
          flex={isMobile ? "grow" : "none"}
          width={isMobile ? mobileWidth : defaultWidth}
        >
          <Box flex="grow">
            <SelectList
              id="groupBy"
              labelDisplay="hidden"
              label={translations[language].groupBy}
              placeholder={translations[language].groupBy}
              onChange={({ value }) => onGroupByChange(value)}
              size={selectSize}
              value={groupBy}
              disabled={disabled}
              aria-label={translations[language].groupBy}
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
        </Flex>
        <IconButton
          accessibilityLabel={translations[language].groupBy}
          icon="info-circle"
          size="sm"
          padding={isMobile ? 0 : 4}
          tooltip={{
            text: translations[language].groupBy,
            idealDirection: "down",
          }}
          aria-label={translations[language].groupBy}
        />
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
