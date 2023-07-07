/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PlayerStatsCard from "../player/PlayerStatsCard.jsx";
import "./navStyle.css";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/userData.jsx";
import LoginModal from "../modals/LoginModal.jsx";
import LogoutModal from "../modals/LogoutModal.jsx";
import RegisterModal from "../modals/RegisterModal.jsx";

const NavBar = ({ drawerOpen, setDrawerOpen }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLoginModalOpen = () => {
    console.log("Hi mom, it worked!");
    setLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const handleLogoutModalOpen = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutModalClose = () => {
    setLogoutModalOpen(false);
  };

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
  };

  const handleRegisterModalClose = () => {
    setRegisterModalOpen(false);
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

  const navigate = useNavigate();

  const navigateToGeComponent = () => {
    navigate("/GeComponent");
  };

  const navigateToGeneralTriumph = () => {
    navigate("/Triumphs");
  };

  const navigateToHome = () => {
    navigate("/ ");
  };

  const user = useUser();

  return (
    <Box sx={{ position: "absolute" }}>
      {!drawerOpen && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          className={`drawer-toggle ${drawerOpen ? "open" : ""}`}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="persistent"
      >
        <Box sx={{ width: 375 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={`drawer-toggle ${drawerOpen ? "open" : ""}`}
          >
            <MenuIcon />
          </IconButton>
          <List>
            {user && (
              <ListItem>
                <ListItemAvatar sx={{ paddingLeft: "15px" }}>
                  <Avatar
                    src="./images/osrsironattempt2.jpeg"
                    sx={{ ...profilePicStyle }}
                  />
                </ListItemAvatar>
                {user ? (
                  <ListItemText
                    primary={user.rsn}
                    sx={{ paddingLeft: "10px" }}
                  />
                ) : (
                  <ListItemText primary={" "} sx={{ paddingLeft: "10px" }} />
                )}
              </ListItem>
            )}

            <ListItem sx={{ ...buttonStyles }}>
              <ListItemText onClick={navigateToHome}>Home</ListItemText>
            </ListItem>

            {!user && (
              <ListItem sx={{ ...buttonStyles }} onClick={handleLoginModalOpen}>
                <ListItemText primary="Login" />
              </ListItem>
            )}

            {!user && (
              <ListItem
                sx={{ ...buttonStyles }}
                onClick={handleRegisterModalOpen}
              >
                <ListItemText primary="Register" />
              </ListItem>
            )}

            <ListItem sx={{ ...buttonStyles }} onClick={navigateToGeComponent}>
              <ListItemText primary="Ge Watcher" />
            </ListItem>

            <ListItem
              sx={{ ...buttonStyles }}
              onClick={navigateToGeneralTriumph}
            >
              <ListItemText primary="Triumphs" />
            </ListItem>

            {user && (
              <ListItem
                sx={{ ...buttonStyles }}
                onClick={handleLogoutModalOpen}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
        </Box>
        <Box sx={{ p: 2 }}>
          <PlayerStatsCard />
        </Box>
      </Drawer>

      {loginModalOpen && (
        <>
          <LoginModal
            loginModalOpen={loginModalOpen}
            handleLoginModalClose={handleLoginModalClose}
          />
        </>
      )}

      {logoutModalOpen && (
        <>
          <LogoutModal
            logoutModalOpen={logoutModalOpen}
            handleLogoutModalClose={handleLogoutModalClose}
          />
        </>
      )}

      {registerModalOpen && (
        <>
          <RegisterModal
            registerModalOpen={registerModalOpen}
            handleRegisterModalClose={handleRegisterModalClose}
          />
        </>
      )}
    </Box>
  );
};

export default NavBar;
