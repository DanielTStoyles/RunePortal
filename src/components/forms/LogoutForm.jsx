/** @format */

import React, { useContext } from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

const LogoutForm = ({ handleClose }) => {
  const { logout } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        width: "400px",
        height: "auto",
        borderRadius: "10px",
        backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
        color: darkMode ? "#fff" : theme.palette.text.primary,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Are you sure you wish to logout?</Typography>
        <Button
          variant="contained"
          onClick={() => {
            logout();
            if (handleClose) {
              handleClose();
            }
          }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default LogoutForm;
