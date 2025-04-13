import { Flex, Toast } from "gestalt";

import PropTypes from "prop-types";
import React from "react";
import { translations } from "../constants/translations";

export default function TaskToast({ show, message, onDismiss, language }) {
  if (!show) return null;

  const text = translations[language][message] || message;

  return (
    <Flex alignItems="end" height="100%" justifyContent="center" width="100%">
      <Toast
        variant="success"
        text={text}
        dismissButton={{
          onDismiss: onDismiss,
        }}
      />
    </Flex>
  );
}

TaskToast.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
