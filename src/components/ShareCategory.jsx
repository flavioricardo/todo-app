import {
  Box,
  Button,
  Flex,
  Icon,
  Layer,
  SelectList,
  Sheet,
  Tabs,
  Text,
  TextField,
} from "gestalt";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { sharingService } from "../services/sharingService";
import { translations } from "../constants/translations";
import { zIndex } from "../utils/zIndex";

export default function ShareCategory({
  isOpen,
  onClose,
  categories,
  language,
  user,
  onShareCategory,
  onRemoveShare,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [targetEmail, setTargetEmail] = useState("");
  const [activeTab, setActiveTab] = useState("share");
  const [isLoading, setIsLoading] = useState(false);
  const [myShares, setMyShares] = useState([]);
  const [sharedWithMe, setSharedWithMe] = useState([]);

  useEffect(() => {
    if (isOpen && user) {
      loadShares();
    }
  }, [isOpen, user]);

  const loadShares = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const shares = await sharingService.getMyShares(user.uid);
      setMyShares(shares);

      const sharedItems = await sharingService.getSharedWithMe(user.uid);
      setSharedWithMe(sharedItems);
    } catch (error) {
      console.error("Error loading shares:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShareCategory = async () => {
    if (!selectedCategory || !targetEmail || !user) return;

    setIsLoading(true);
    try {
      await onShareCategory(selectedCategory, targetEmail);
      setTargetEmail("");
      setSelectedCategory("");
      loadShares();
    } catch (error) {
      console.error("Error sharing category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveShare = async (shareId) => {
    setIsLoading(true);
    try {
      await onRemoveShare(shareId);
      loadShares();
    } catch (error) {
      console.error("Error removing share:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderShareForm = () => (
    <Box padding={4}>
      <Box marginBottom={4}>
        <SelectList
          id="categoryToShare"
          label={translations[language].taskCategory}
          onChange={({ value }) => setSelectedCategory(value)}
          placeholder={translations[language].taskCategory}
          value={selectedCategory}
          disabled={isLoading}
        >
          {categories.map((cat) => (
            <SelectList.Option
              key={cat}
              label={translations[language].categories[cat] || cat}
              value={cat}
            />
          ))}
        </SelectList>
      </Box>

      <Box marginBottom={4}>
        <TextField
          id="targetEmail"
          onChange={({ value }) => setTargetEmail(value)}
          placeholder={translations[language].emailPlaceholder}
          label={translations[language].shareWith}
          value={targetEmail}
          type="email"
          disabled={isLoading}
        />
      </Box>

      <Button
        text={translations[language].shareCategory}
        color="blue"
        onClick={handleShareCategory}
        disabled={!selectedCategory || !targetEmail || isLoading}
      />
    </Box>
  );

  const renderSharesList = () => (
    <Box padding={4} marginTop={2}>
      <Text weight="bold">{translations[language].sharedByMe}</Text>
      {myShares.length === 0 ? (
        <Box padding={2}>
          <Text>{translations[language].noCustomCategories}</Text>
        </Box>
      ) : (
        myShares.map((share) => (
          <Flex
            key={share.id}
            alignItems="center"
            justifyContent="between"
            gap={2}
          >
            <Box flex="grow">
              <Text weight="bold">
                {translations[language].categories[share.categoryName] ||
                  share.categoryName}
              </Text>
              <Text size="100">{share.targetEmail}</Text>
            </Box>
            <Button
              text={translations[language].removeShare}
              onClick={() => handleRemoveShare(share.id)}
              color="red"
              size="sm"
              disabled={isLoading}
            />
          </Flex>
        ))
      )}

      <Box marginTop={4}>
        <Text weight="bold">{translations[language].sharedWithMe}</Text>
        {sharedWithMe.length === 0 ? (
          <Box padding={2}>
            <Text>{translations[language].noCustomCategories}</Text>
          </Box>
        ) : (
          sharedWithMe.map((share) => (
            <Flex key={share.id} alignItems="center" gap={2}>
              <Icon icon="person" accessibilityLabel="User" color="darkGray" />
              <Box>
                <Text weight="bold">
                  {translations[language].categories[share.categoryName] ||
                    share.categoryName}
                </Text>
                <Text size="100">{share.targetEmail}</Text>
              </Box>
            </Flex>
          ))
        )}
      </Box>
    </Box>
  );

  return isOpen ? (
    <Layer zIndex={zIndex}>
      <Sheet
        accessibilityLabel={translations[language].shareCategory}
        heading={translations[language].shareCategory}
        onDismiss={onClose}
        footer={
          <Box display="flex" justifyContent="end" padding={2}>
            <Button text={translations[language].close} onClick={onClose} />
          </Box>
        }
        size="md"
      >
        <Tabs
          activeTabIndex={activeTab === "share" ? 0 : 1}
          onChange={({ activeTabIndex }) => {
            setActiveTab(activeTabIndex === 0 ? "share" : "list");
          }}
          tabs={[
            { text: translations[language].shareWithUser, id: "share" },
            { text: translations[language].sharing, id: "list" },
          ]}
        />
        {activeTab === "share" ? renderShareForm() : renderSharesList()}
      </Sheet>
    </Layer>
  ) : null;
}

ShareCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  user: PropTypes.object,
  onShareCategory: PropTypes.func.isRequired,
  onRemoveShare: PropTypes.func.isRequired,
};
