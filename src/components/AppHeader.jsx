import {
  Box,
  Button,
  ButtonGroup,
  Dropdown,
  IconButton,
  Image,
  PageHeader,
  SelectList,
  Tooltip,
} from "gestalt";
import React, { Fragment, useRef } from "react";

import PropTypes from "prop-types";
import logoImage from "../assets/logo512.png";
import { translations } from "../constants/translations";

export default function AppHeader({
  theme,
  language,
  isMobile,
  user,
  toggleTheme,
  setLanguage,
  handleSignOut,
  setOpenLoginModal,
  syncData,
  onOpenShareModal,
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = useRef(null);

  return (
    <Box color="elevationFloating" rounding={3} overflow="hidden">
      <PageHeader
        title="To-Do App"
        subtext={translations[language].subTitle}
        borderStyle="pill"
        thumbnail={
          !isMobile && (
            <Image
              alt="To-Do App"
              key="logo"
              fit="contain"
              naturalHeight={1}
              naturalWidth={1}
              src={logoImage}
              aria-label="To-Do App Logo"
            />
          )
        }
        primaryAction={{
          component: (
            <ButtonGroup>
              <Button
                text={
                  theme === "lightWash"
                    ? translations[language].darkMode
                    : translations[language].lightMode
                }
                onClick={toggleTheme}
                aria-label={
                  theme === "lightWash"
                    ? translations[language].darkMode
                    : translations[language].lightMode
                }
              />
              <SelectList
                id="languageSelect"
                value={language}
                onChange={({ value }) => setLanguage(value)}
                aria-label={translations[language].globe}
              >
                <SelectList.Option
                  label={translations[language].portuguese}
                  value="pt"
                />
                <SelectList.Option
                  label={translations[language].english}
                  value="en"
                />
              </SelectList>
              {user?.email && (
                <Box display="flex">
                  <IconButton
                    size="sm"
                    icon="refresh"
                    padding={3}
                    tooltip={{ text: translations[language].syncData }}
                    onClick={syncData}
                    aria-label={translations[language].syncData}
                  />
                  <IconButton
                    size="sm"
                    icon="share"
                    padding={3}
                    tooltip={{ text: translations[language].sharing }}
                    onClick={() => onOpenShareModal(true)}
                    aria-label={translations[language].sharing}
                  />
                </Box>
              )}
              <Button
                text={
                  user?.email
                    ? translations[language].signOut
                    : translations[language].signIn
                }
                iconEnd="person"
                onClick={
                  user?.email ? handleSignOut : () => setOpenLoginModal(true)
                }
                aria-label={
                  user?.email
                    ? translations[language].signOut
                    : translations[language].signIn
                }
              />
            </ButtonGroup>
          ),
        }}
        dropdownAccessibilityLabel={translations[language].options}
        secondaryAction={
          isMobile && {
            component: (
              <Fragment>
                <Tooltip
                  idealDirection="up"
                  text={translations[language].options}
                >
                  <IconButton
                    ref={anchorRef}
                    accessibilityExpanded={open}
                    accessibilityHaspopup
                    accessibilityLabel={translations[language].options}
                    icon="ellipsis"
                    iconColor="darkGray"
                    onClick={() => setOpen((prev) => !prev)}
                    selected={open}
                    aria-label={translations[language].options}
                  />
                </Tooltip>
              </Fragment>
            ),
            dropdownItems: [
              <Dropdown.Item
                key="set-language"
                onSelect={() => setLanguage(language === "en" ? "pt" : "en")}
                option={{
                  value: language,
                  label:
                    language === "en"
                      ? translations[language].english
                      : translations[language].portuguese,
                }}
                iconEnd="globe"
              />,
              <Dropdown.Item
                key="set-theme"
                onSelect={() => toggleTheme()}
                option={{
                  value: language,
                  label:
                    theme === "lightWash"
                      ? translations[language].darkMode
                      : translations[language].lightMode,
                }}
                iconEnd="globe"
              />,
              <Dropdown.Item
                key="sync-data"
                option={{ value: "", label: translations[language].syncData }}
                onSelect={syncData}
              />,
              <Dropdown.Item
                key="share-category"
                option={{
                  value: "",
                  label: translations[language].sharing,
                }}
                onSelect={() => onOpenShareModal(true)}
              />,
              <Dropdown.Item
                key="get-login"
                onSelect={() =>
                  user?.email ? handleSignOut() : setOpenLoginModal(true)
                }
                option={{
                  value: "",
                  label: user?.email
                    ? translations[language].signOut
                    : translations[language].signIn,
                }}
                iconEnd="person"
              />,
            ],
          }
        }
      />
    </Box>
  );
}

AppHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  user: PropTypes.object,
  toggleTheme: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  setOpenLoginModal: PropTypes.func.isRequired,
  syncData: PropTypes.func.isRequired,
  onOpenShareModal: PropTypes.func.isRequired,
};
