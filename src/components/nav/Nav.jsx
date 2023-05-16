/** @format */

import React, { useState, useContext } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PlayerStatsCard from "../player/PlayerStatsCard.jsx";
import RegisterForm from "../forms/RegisterForm.jsx";
import LoginForm from "../forms/LoginForm.jsx";
import Modal from "@mui/material/Modal";
import "./navStyle.css";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

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

  const buttonStyles = {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0047B2",
    },
  };

  const profilePicStyle = {
    "&:hover": {
      cursor: "pointer",
    },
  };

  return (
    <>
      <Container className="icon-container">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          className={`drawer-toggle ${drawerOpen ? "open" : ""}`}
        >
          <MenuIcon />
        </IconButton>
      </Container>
      {/* Drawer */}

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="persistent"
      >
        <Box sx={{ width: 375 }}>
          <List>
            <ListItem>
              <ListItemAvatar sx={{ paddingLeft: "15px" }}>
                <Avatar
                  src="./images/defaultUser.png"
                  sx={{ ...profilePicStyle }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Username Here"
                sx={{ paddingLeft: "10px" }}
              />
            </ListItem>

            <ListItem sx={{ ...buttonStyles }} onClick={handleLoginModalOpen}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              sx={{ ...buttonStyles }}
              onClick={handleRegisterModalOpen}
            >
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem sx={{ ...buttonStyles }} onClick={toggleDarkMode}>
              <ListItemText
                primary={
                  darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ p: 2 }}>
          <PlayerStatsCard />
        </Box>
      </Drawer>

      {loginModalOpen && (
        <>
          <Modal
            open={loginModalOpen}
            onClose={handleLoginModalClose}
            BackdropProps={{
              sx: {
                background: darkMode
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(255, 255, 255, 0.6)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <LoginForm handleClose={handleLoginModalClose} />
            </Box>
          </Modal>
        </>
      )}
      {registerModalOpen && (
        <>
          <Modal
            open={registerModalOpen}
            onClose={handleRegisterModalClose}
            BackdropProps={{
              sx: {
                background: darkMode
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(255, 255, 255, 0.6)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <RegisterForm handleClose={handleRegisterModalClose} />
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default NavBar;