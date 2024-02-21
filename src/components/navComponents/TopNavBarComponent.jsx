/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logoutButtonDoor from "../../images/logoutButtonDoor.jpg";

const NavBarComponent = ({ pageName }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center w-full h-14 bg-[#19181B] px-4 mb-4">
      <div className="text-[#A4A1AA] font-bold text-2xl leading-7 font-arial">
        {pageName}
      </div>
      {user ? (
        <button
          className="w-[90.20px] h-8 px-4 py-2 bg-purple-900 rounded-lg justify-center items-center gap-2 inline-flex"
          onClick={logout}
        >
          <img
            src={logoutButtonDoor}
            alt="Logout"
            className="w-[11px] h-4 mr-1"
          />{" "}
          <div className="text-zinc-200 text-sm font-bold font-['Arial']">
            Logout
          </div>
        </button>
      ) : (
        <button
          className="w-[90.20px] h-8 px-4 py-2 bg-purple-900 rounded-lg justify-center items-center gap-2 inline-flex"
          onClick={login}
        >
          <img
            src={logoutButtonDoor}
            alt="Login"
            className="w-[11px] h-4 mr-1"
          />{" "}
          <div className="text-zinc-200 text-sm font-bold font-['Arial']">
            Logout
          </div>
        </button>
      )}
    </nav>
  );
};

export default NavBarComponent;
