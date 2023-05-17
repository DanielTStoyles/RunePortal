/** @format */

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  useEffect(() => {
    if (authToken) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      console.log({users, authToken})
      const storedUser = users.find((user) => user.id === authToken);
      console.log({storedUser})
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, [authToken]);

  const login = (data) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const { email, password } = data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if(user){
        setAuthToken(user.id);
        localStorage.setItem("authToken", user.id);
        setUser(user);
      }
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
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
