/** @format */

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm.jsx";
import Home from "./components/home/Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

function App() {
  // const isLoggedIn=useContext(UserContext);
  const isMobile = true;
  return (
    <BrowserRouter>
      <CssBaseline />
      <RegisterModal />
      <LoginModal />
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
