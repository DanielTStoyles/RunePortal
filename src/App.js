/** @format */

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import RegisterForm from "./register";
import LoginForm from "./LoginForm.jsx";
import Home from "./Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./ThemeContext.jsx";
import { UserProvider } from "./UserContext.jsx";

function App() {
  // const isLoggedIn=useContext(UserContext);
  return (
    <BrowserRouter>
      <CssBaseline />
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
