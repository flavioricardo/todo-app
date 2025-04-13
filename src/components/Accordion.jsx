import React, { useState } from "react";
import { Box, Module } from "gestalt";
import PropTypes from "prop-types";
import "gestalt/dist/gestalt.css";

function Accordion({
  items,
  id,
  accessibilityExpandLabel,
  accessibilityCollapseLabel,
  defaultExpandedIndices = [],
  onExpandedChange,
}) {
  const [expandedIndices, setExpandedIndices] = useState(
    defaultExpandedIndices
  );

  const toggleItem = (index) => {
    let newExpandedIndices;

    if (expandedIndices.includes(index)) {
      newExpandedIndices = expandedIndices.filter((i) => i !== index);
    } else {
      newExpandedIndices = [...expandedIndices, index];
    }

    setExpandedIndices(newExpandedIndices);

    if (onExpandedChange) {
      onExpandedChange(newExpandedIndices);
    }
  };

  return (
    <Box>
      {items.map((item, index) => {
        const isExpanded = expandedIndices.includes(index);

        return (
          <Box key={`${id}-item-${index}`} marginTop={2} marginBottom={2}>
            <Module.Expandable
              id={`${id}-module-${index}`}
              accessibilityCollapseLabel={accessibilityCollapseLabel}
              accessibilityExpandLabel={accessibilityExpandLabel}
              items={[item]}
              expandedIndex={isExpanded ? 0 : null}
              onExpandedChange={() => toggleItem(index)}
            />
          </Box>
        );
      })}
    </Box>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconButton: PropTypes.element,
      summary: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.oneOf(["info", "error"]),
      iconAccessibilityLabel: PropTypes.string,
      children: PropTypes.node,
      badge: PropTypes.object,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  accessibilityExpandLabel: PropTypes.string.isRequired,
  accessibilityCollapseLabel: PropTypes.string.isRequired,
  defaultExpandedIndices: PropTypes.arrayOf(PropTypes.number),
  onExpandedChange: PropTypes.func,
};

Accordion.defaultProps = {
  defaultExpandedIndices: [],
  onExpandedChange: undefined,
};

export default Accordion;
