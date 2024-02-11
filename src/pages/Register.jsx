/** @format */

import React from "react";

import SideBar from "../components/navComponents/SideBarComp";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import RunePortalRegisterForm from "../components/forms/RunePortalRegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex w-full bg-runeportal-darkpurple">
      <SideBar />
      <div className="flex flex-col w-full">
        <NavBarComponent pageName="Register" />

        <div className="flex flex-col items-center flex-grow min-h-screen bg-runeportal-darkpurple">
          <div className="flex flex-col items-center justify-center p-10 gap-6 w-3/4 h-3/4 bg-[#1F1F1F] border border-[#53358D] rounded-lg">
            <p className="text-white text-6xl ">Create an Account</p>

            <RunePortalRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
