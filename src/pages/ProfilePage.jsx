/** @format */

import React, { useContext } from "react";
import ProfileComponent from "../components/profileComponents/ProfileComponent";
import AuthContext from "../context/AuthContext";
import SideBar from "../components/SideBarComp";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg3.jpg)] 
          bg-repeat bg-center bg-top mx-auto 
          overflow-y-hidden px-012 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <SideBar user={user} />
      </div>
      <div>
        <ProfileComponent />
      </div>
    </div>
  );
};

export default ProfilePage;
