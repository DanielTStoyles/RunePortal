/** @format */

import React, { useContext } from "react";
import SideBar from "../components/SideBarComp";
import AuthContext from "../context/AuthContext";

const GeComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg2.jpg)] 
    bg-repeat-y bg-center bg-top mx-auto 
    overflow-y-hidden px-012 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <SideBar user={user} />
      </div>
      <div></div>
    </div>
  );
};

export default GeComponent;
