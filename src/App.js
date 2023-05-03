/** @format */

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import RegisterForm from "./register";
import LoginForm from "./LoginForm.jsx";
import Home from "./Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./ThemeContext";

function App() {
  // const isLoggedIn=useContext(UserContext);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppWrapper() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

export default AppWrapper;
