/** @format */

import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./register";
import { ThemeContext } from "./ThemeContext.jsx";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
  };

  const handleRegisterModalClose = () => {
    setRegisterModalOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Navigation bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RunePortal
          </Typography>
          <Button color="inherit" onClick={handleLoginModalOpen}>
            Login
          </Button>
          <Button color="inherit" onClick={handleRegisterModalOpen}>
            Register
          </Button>
          <Button color="inherit" onClick={toggleDarkMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}{" "}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
          color: darkMode ? "#fff" : theme.palette.text.primary,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3">Welcome to RunePortal</Typography>
          <Typography variant="subtitle1">
            Your one stop HUB for everything Oldschool Runescape!
          </Typography>
        </Box>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Pum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.{" "}
        </Typography>
      </Container>

      {/* Login modal */}
      <Modal open={loginModalOpen} onClose={handleLoginModalClose}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <LoginForm />
        </Box>
      </Modal>

      {/* Register modal */}
      <Modal open={registerModalOpen} onClose={handleRegisterModalClose}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <RegisterForm />
        </Box>
      </Modal>
    </>
  );
};

export default Home;
