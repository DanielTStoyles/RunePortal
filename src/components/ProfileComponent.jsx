/** @format */

import React, { useContext } from "react";
import SideBar from "../components/SideBarComp";
import AuthContext from "../context/AuthContext";
import CurrentUsername from "./LoggedUsername";

const ProfileComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] 
    bg-repeat-y bg-center bg-top mx-auto 
    overflow-y-hidden flex justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <SideBar user={user} />
      </div>
      <div className="top-0">
        <h1 className="p-3 text-slate-50 text-4xl">
          <CurrentUsername />
          's Profile
        </h1>
      </div>
      <div className="relative items-center">
        <h2 className=" p-3 text-slate-50 text-xl">Registered Accounts</h2>
      </div>
    </div>
  );
};

export default ProfileComponent;
