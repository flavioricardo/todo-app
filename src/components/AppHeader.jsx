import {
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
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = useRef(null);

  return (
    <PageHeader
      title="To-Do App"
      borderStyle="none"
      thumbnail={
        !isMobile && (
          <Image
            alt="To-Do App"
            key="logo"
            fit="contain"
            naturalHeight={1}
            naturalWidth={1}
            src={logoImage}
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
            />
            <SelectList
              id="languageSelect"
              value={language}
              onChange={({ value }) => setLanguage(value)}
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
              <IconButton
                size="sm"
                icon="refresh"
                padding={3}
                tooltip={{ text: translations[language].syncData }}
                onClick={syncData}
              />
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
};
