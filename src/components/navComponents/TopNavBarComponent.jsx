/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginDoor from "../../images/loginDoor.jpg";
import logoutDoor from "../../images/logoutDoor.png";

const NavBarComponent = ({ pageName }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <nav className="flex justify-between items-center w-full h-14 bg-top-purp px-4 mb-4">
      <div className="text-[#A4A1AA] font-bold text-2xl leading-7 font-arial">
        {pageName}
      </div>

      {user ? (
        <button
          className="w-[90.20px] h-8 px-4 py-2 bg-runeportal-buttonpurple rounded-lg justify-center items-center gap-2 inline-flex"
          onClick={logout}
        >
          <img src={loginDoor} alt="Logout" className="w-[11px] h-4 mr-1" />
          <div className="text-zinc-200 text-sm font-bold font-['Arial']">
            Logout
          </div>
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            className="w-[90.20px] h-8 px-4 py-2 bg-transparent rounded-lg border-2 border-button-border justify-center items-center gap-2 inline-flex"
            onClick={register}
          >
            <div className="text-zinc-200 text-sm font-bold font-['Arial']">
              Register
            </div>
          </button>
          <button
            className="w-[90.20px] h-8 px-4 py-2 bg-runeportal-buttonpurple rounded-lg justify-center items-center gap-2 inline-flex"
            onClick={login}
          >
            <img src={logoutDoor} alt="Login" className="w-[11px] h-4 mr-1" />
            <div className="text-zinc-200 text-sm font-bold font-['Arial']">
              Login
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBarComponent;
