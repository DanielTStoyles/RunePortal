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
  centerContent = false, // new prop to control content centering
}) => {
  const { user } = useContext(AuthContext);

  const containerClasses = `relative w-full bg-gradient-to-b from-top-purp to-bottom-black min-h-screen flex ${
    showSidebar ? "md:flex-row" : "flex-col"
  }`;

  const contentContainerClasses = `flex flex-col flex-grow ${
    centerContent ? "items-center justify-center" : ""
  }`; // apply centering styles if centerContent is true

  return (
    <div className={containerClasses}>
      {showSidebar && <SideBar user={user} className={sidebarClassName} />}
      <div className={contentContainerClasses}>
        {showNavBar && <NavBarComponent pageName={pageTitle} />}
        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default MainPageLayout;
