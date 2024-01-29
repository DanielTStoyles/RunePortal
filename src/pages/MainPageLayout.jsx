/** @format */

import React, { useContext } from "react";
import SideBar from "../components/navComponents/SideBarComp";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import AuthContext from "../context/AuthContext";

const MainPageLayout = ({ children, pageTitle }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex w-full bg-runeportal-darkpurple min-h-screen">
      <SideBar user={user} className="w-64 flex-shrink-0" />{" "}
      {/* Fixed width sidebar */}
      <div className="flex flex-col flex-grow">
        {" "}
        {/* Main content area */}
        <NavBarComponent pageName={pageTitle} />
        {/* Main container for children with padding and margin */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainPageLayout;
