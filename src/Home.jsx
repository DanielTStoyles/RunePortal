/** @format */

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <>
      {/* Navigation bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Toolbar>
      </AppBar>
      {/* Main content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3">Welcome to the RunePortal</Typography>
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
    </>
  );
};

export default Home;
