/** @format */

import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const checkSession = async () => {
    try {
      const response = await fetch("/api/checkSession");
      const data = await response.json();
      if (data) {
        setUser(data);
      } else {
        setUser();
      }
    } catch (error) {
      console.error("failed to check session", error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
