/** @format */

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/home/Home.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import NavBar from "./components/nav/Nav.jsx";
import GeComponent from "./components/grand-exchange/GeComponent.jsx";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const contentStlye = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: drawerOpen ? 375 : 0,
    transition: "margin-left 0.3s",
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <div style={{ display: "flex", height: "100vh" }}>
        <NavBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <div style={contentStlye}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/triumphs" element={<div />} />
            <Route
              exact
              path="/GeComponent"
              element={<GeComponent drawerOpen={drawerOpen} />}
            />
          </Routes>
        </div>
      </div>
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
