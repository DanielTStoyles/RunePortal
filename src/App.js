/** @format */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./components/home/Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import NavBar from "./components/nav/Nav.jsx";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <RegisterModal />
      <LoginModal />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/triumphs" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppWrapper() {
  return (
    <UserProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserProvider>
  );
}

export default AppWrapper;
