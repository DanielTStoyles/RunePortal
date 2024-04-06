/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import RsnRegisterForm from "../components/forms/RsnRegisterForm";
import finalLogo from "../images/finalLogo.png";
import slogan from "../images/slogan.png";
import welcome from "../images/welcome.png";

const RegisterPage = () => {
  return (
    <MainPageLayout pageTitle="Home">
      <div>
        <div className="flex-grow flex flex-col items-center">
          <img src={welcome} alt="Welcome to Runeportal" />

          <img
            src={finalLogo}
            alt="RunePortal Logo"
            className="w-[254px] h-[300px] mb-8"
          />
          <img src={slogan} alt="Runeportal Slogan" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 mt-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col justify-start items-start gap-6">
            <RsnRegisterForm />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default RegisterPage;
