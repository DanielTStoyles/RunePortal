/** @format */

import React, { useContext } from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useTheme } from "@mui/material/styles";
import UsePageName from "./PageName.jsx";

const Home = ({ drawerOpen }) => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const commonStyles = {
    backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
    color: darkMode ? "#fff" : theme.palette.text.primary,
  };

  const pageName = UsePageName();
  const paddingLeft = drawerOpen ? "8px" : "48px";

  return (
    <>
      <Typography
        variant="h4"
        style={{ textAlign: "left", paddingLeft: paddingLeft }}
      >
        {pageName}
      </Typography>
      <Container
        maxWidth="md"
        sx={{
          ...commonStyles,
          mt: 4,
          borderRadius: "10px",
          mb: 4,
          zIndex: 9,
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
