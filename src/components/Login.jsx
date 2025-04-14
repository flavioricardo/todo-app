import {
  Box,
  Button,
  CompositeZIndex,
  Flex,
  Heading,
  Layer,
  Sheet,
  TextField,
} from "gestalt";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { translations } from "../constants/translations";
import { zIndex } from "../utils/zIndex";

export default function Login({
  isOpen,
  onClose,
  onLoginEmail,
  onLoginGoogle,
  onSignOut,
  user,
  language,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onLoginEmail(email, password);
  };

  return isOpen ? (
    <Layer zIndex={zIndex}>
      <Sheet
        accessibilityLabel="Login"
        heading={translations[language].signIn}
        onDismiss={onClose}
        footer={
          <Flex justifyContent="between">
            {user?.email && (
              <Button
                text={translations[language].signOut}
                onClick={onSignOut}
                color="red"
              />
            )}
          </Flex>
        }
        size="sm"
      >
        <Box direction="column" padding={4}>
          {!user?.email && (
            <Flex direction="column" gap={4}>
              <TextField
                id="email"
                type="email"
                onChange={({ value }) => setEmail(value)}
                placeholder="Email"
              />
              <TextField
                id="password"
                type="password"
                onChange={({ value }) => setPassword(value)}
                placeholder="Password"
              />
              <Button
                text="Login with Email"
                onClick={handleSubmit}
                color="blue"
              />
              <Button
                text="Login with Google"
                onClick={onLoginGoogle}
                iconEnd="google-plus"
              />
            </Flex>
          )}
          {user?.email && (
            <Heading size="400">
              {translations[language].welcome}, {user.email}
            </Heading>
          )}
        </Box>
      </Sheet>
    </Layer>
  ) : null;
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLoginEmail: PropTypes.func.isRequired,
  onLoginGoogle: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  user: PropTypes.object,
  language: PropTypes.string.isRequired,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(CompositeZIndex),
  ]),
};
