/** @format */

import React, { useContext } from "react";
import SideBar from "../components/navComponents/SideBarComp";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import AuthContext from "../context/AuthContext";

const MainPageLayout = ({ children, pageTitle }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex w-full bg-runeportal-darkpurple">
      <SideBar user={user} />

      <div className="flex flex-col w-full">
        <NavBarComponent pageName={pageTitle} />

        <div className="flex flex-col items-center gap-4 w-full bg-runeportal-darkpurple">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainPageLayout;
