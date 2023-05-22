/** @format */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/home/Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import NavBar from "./components/nav/Nav.jsx";
import GeComponent from "./components/grand-exchange/GeComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/triumphs" element={<div />} />
        <Route exact path="/GeComponent" element={<GeComponent />} />
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
