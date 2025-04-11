import {
  Box,
  Button,
  Flex,
  IconButton,
  Layer,
  Modal,
  Text,
  TextField,
  Toast,
} from "gestalt";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { translations } from "../constants/translations";
import { zIndex } from "../utils/zIndex";

export default function CategoryManagement({
  isOpen,
  onClose,
  onAddCategory,
  onRemoveCategory,
  customCategories,
  language,
}) {
  const [newCategory, setNewCategory] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      showToastMessage(translations[language].categoryNameRequired);
      return;
    }

    if (customCategories.includes(newCategory)) {
      showToastMessage(translations[language].categoryAlreadyExists);
      return;
    }

    onAddCategory(newCategory);
    setNewCategory("");
    showToastMessage(translations[language].categoryAdded);
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Layer zIndex={zIndex}>
      {isOpen && (
        <Modal
          accessibilityModalLabel={translations[language].manageCategories}
          heading={translations[language].manageCategories}
          onDismiss={onClose}
          size="sm"
          footer={
            <Flex justifyContent="end">
              <Button text={translations[language].close} onClick={onClose} />
            </Flex>
          }
        >
          <Box padding={4}>
            <Flex direction="column" gap={4}>
              <Box>
                <Text weight="bold">
                  {translations[language].addNewCategory}
                </Text>
                <Flex gap={2} alignItems="center">
                  <Box flex="grow">
                    <TextField
                      id="newCategory"
                      onChange={({ value }) => setNewCategory(value)}
                      placeholder={
                        translations[language].categoryNamePlaceholder
                      }
                      value={newCategory}
                    />
                  </Box>
                  <Button
                    text={translations[language].add}
                    onClick={handleAddCategory}
                    color="blue"
                    disabled={!newCategory.trim()}
                    size="sm"
                  />
                </Flex>
              </Box>

              <Box>
                <Text weight="bold">
                  {translations[language].customCategories}
                </Text>
                {customCategories.length === 0 ? (
                  <Text>{translations[language].noCustomCategories}</Text>
                ) : (
                  <Box marginTop={2}>
                    {customCategories.map((category) => (
                      <Flex
                        key={category}
                        alignItems="center"
                        justifyContent="between"
                      >
                        <Text>{category}</Text>
                        <IconButton
                          accessibilityLabel={
                            translations[language].deleteCategory
                          }
                          icon="trash-can"
                          onClick={() => onRemoveCategory(category)}
                          size="xs"
                        />
                      </Flex>
                    ))}
                  </Box>
                )}
              </Box>
            </Flex>
          </Box>
        </Modal>
      )}

      {showToast && (
        <Toast
          text={toastMessage}
          variant="informational"
          onDismiss={() => setShowToast(false)}
        />
      )}
    </Layer>
  );
}

CategoryManagement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddCategory: PropTypes.func.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
  customCategories: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};
