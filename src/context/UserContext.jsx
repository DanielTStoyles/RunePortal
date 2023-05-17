/** @format */

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  useEffect(() => {
    if (authToken) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const storedUser = users.find((user) => user.authToken === authToken);
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const storedUser = users.find((user) => user.authToken === token);
    setUser(storedUser);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("users");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
