import React from "react";
import { Flex, Toast } from "gestalt";
import { translations } from "../constants/translations";
import PropTypes from "prop-types";

export default function TaskToast({ show, message, onDismiss, language }) {
  if (!show) return null;

  return (
    <Flex alignItems="end" height="100%" justifyContent="center" width="100%">
      <Toast
        variant="success"
        text={translations[language][message] || message}
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
