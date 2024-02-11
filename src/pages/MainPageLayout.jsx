/** @format */

import React, { useContext } from "react";
import SideBar from "../components/navComponents/SideBarComp";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import AuthContext from "../context/AuthContext";

const MainPageLayout = ({ children, pageTitle }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="relative w-full bg-runeportal-darkpurple min-h-screen flex">
      <SideBar user={user} className="w-64 flex-shrink-0" />{" "}
      {/* Fixed width sidebar */}
      <div className="flex flex-col flex-grow">
        <NavBarComponent pageName={pageTitle} /> {/* Top Navigation Bar */}
        <div className="p-4 flex justify-center"> {children}</div>
      </div>
    </div>
  );
};

export default MainPageLayout;
