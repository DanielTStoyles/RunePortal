/** @format */

import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./register";
import { ThemeContext } from "./ThemeContext.jsx";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const commonStyles = {
    backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
    color: darkMode ? "#fff" : theme.palette.text.primary,
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        BackdropProps={{
          sx: {
            background: "none",
          },
        }}
      >
        <Box sx={{ width: 250 }} onClick={toggleDrawer}>
          <List>
            <ListItem onClick={handleLoginModalOpen}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem onClick={handleRegisterModalOpen}>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem onClick={toggleDarkMode}>
              <ListItemText
                primary={
                  darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Container
        maxWidth="md"
        sx={{
          ...commonStyles,
          mt: 4,
          borderRadius: "10px",
          mb: 4,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4, pb: "10px" }}>
          <Typography variant="h3">Welcome to RunePortal</Typography>
          <Typography variant="subtitle1">
            Your one stop HUB for everything Oldschool Runescape!
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mb: 4, pb: "30px" }}
        >
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
          <LoginForm handleClose={handleLoginModalClose} />
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
          <RegisterForm handleClose={handleRegisterModalClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Home;
