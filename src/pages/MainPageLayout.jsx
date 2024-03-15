/** @format */

import React, { useContext } from "react";
import SideBar from "../components/navComponents/SideBarComp";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import AuthContext from "../context/AuthContext";

const MainPageLayout = ({
  children,
  pageTitle,
  sidebarClassName = "w-64 flex-shrink-0",
  contentClassName = "p-4",
  showSidebar = true,
  showNavBar = true,
}) => {
  const { user } = useContext(AuthContext);

  const containerClasses = `relative w-full bg-gradient-to-b from-top-purp to-bottom-black min-h-screen flex ${
    showSidebar ? "md:flex-row" : "flex-col"
  }`;

  return (
    <div className={containerClasses}>
      {showSidebar && <SideBar user={user} className={sidebarClassName} />}
      <div className="flex flex-col flex-grow">
        {showNavBar && <NavBarComponent pageName={pageTitle} />}
        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default MainPageLayout;
