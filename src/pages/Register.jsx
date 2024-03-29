/** @format */

import React from "react";
import MainPageLayout from "./MainPageLayout";
import RsnRegisterForm from "../components/forms/RsnRegisterForm";
import RunePortalLogo1 from "../images/RunePortalLogo1.png";

const RegisterPage = () => {
  return (
    <MainPageLayout pageTitle="Home">
      <div>
        <div className="flex-grow flex flex-col items-center">
          <div className="text-[64px] text-pink-300 mb-2 font-elmessiri">
            Welcome to
          </div>
          <img
            src={RunePortalLogo1}
            alt="RunePortal Logo"
            className="w-[254px] h-[300px] mb-8"
          />
          <p className="text-white text-2xl">
            Progress and Prices all in one place
          </p>
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
