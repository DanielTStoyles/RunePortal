/** @format */

import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PlayerStatsCard from "../player/PlayerStatsCard.jsx";

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
        BackdropProps={{
          sx: {
            background: "none",
          },
        }}
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
    </>
  );
};

export default Home;
