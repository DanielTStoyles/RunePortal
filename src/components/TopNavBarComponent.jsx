/** @format */

import React, { useContext } from "react";
import logoutButtonDoor from "../images/logoutButtonDoor.jpg";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBarComponent = ({ pageName }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center w-full h-8 bg-[#19181B] px-4">
      <div className="text-[#A4A1AA] font-bold text-2xl leading-7 font-arial">
        {pageName}
      </div>

      {user ? (
        <button
          onClick={logout}
          className="w-4 h-6 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${logoutButtonDoor})` }}
        />
      ) : (
        <button onClick={login} className="text-white">
          Login
        </button>
      )}
    </nav>
  );
};

export default NavBarComponent;
