/** @format */

import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const checkSession = async () => {
    try {
      const response = await fetch("/api/checkSession");
      const data = await response.json();
      if (data) {
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("failed to check session", error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      const data = await response.json();
      console.log("Logout response", data);
      if (data.message === "Logged out") {
        setUser(null);
        navigate("/home");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, checkSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
