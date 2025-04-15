import { Box, Layer, Toast } from "gestalt";

import PropTypes from "prop-types";
import React from "react";
import { translations } from "../constants/translations";

export default function TaskToast({ show, message, onDismiss, language }) {
  if (!show) return null;

  const text = translations[language][message] || message;

  return (
    <Layer>
      <Box
        dangerouslySetInlineStyle={{
          __style: {
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
        display="flex"
        justifyContent="center"
        paddingX={1}
        position="fixed"
        width="100%"
      >
        <Toast
          variant="success"
          text={text}
          dismissButton={{
            onDismiss: onDismiss,
          }}
        />
      </Box>
    </Layer>
  );
}

TaskToast.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
