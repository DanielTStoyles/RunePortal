/** @format */

import React from "react";
import LandingPageCard from "../components/LandingPageDescriptionCard";
import SideBar from "../components/navComponents/SideBarComp";
import RunePortalRegisterForm from "../components/forms/RunePortalRegisterForm";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import RunePortalLogo from "../images/RunePortalLogo.png";

const LandingPage = () => {
  return (
    <div className="flex w-full bg-runeportal-darkpurple">
      <SideBar />
      <div className="flex flex-col w-full">
        <NavBarComponent pageName="Welcome" />

        <div className="flex flex-col items-center min-h-screen w-full p-[80px] gap-[80px] bg-runeportal-darkpurple">
          <img
            src={RunePortalLogo}
            alt="RunePortal Logo"
            className="w-[100px] h-[100px]"
          />
          <div className="w-[676px] h-[74px] font-arial text-[64px] leading-[74px] text-white">
            Welcome to RunePortal
          </div>
          <div className="flex flex-col items-start p-[40px] gap-[24px] w-[632px] h-[438px] bg-[#1F1F1F] border border-[#53358D] rounded-[8px]">
            <div className="w-[198px] h-[28px] font-arial text-[24px] leading-[28px] text-white">
              Create an Account
            </div>
            <RunePortalRegisterForm />
          </div>
          <div className="self-start w-full px-[80px]">
            <span className="text-white text-4xl">What We Do</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LandingPageCard
              title="Track Progress"
              description="Track the progress of all your OSRS accounts, as well as other players!"
              imageUrl="path_to_image"
            />

            <LandingPageCard
              title="GE Price Tracker"
              description="Lookup data on GE items! Complete with historical price data, live High and Low prices,
            and a visual chart!"
              imageUrl="path_to_image"
            />

            <LandingPageCard
              title="GE Item Watchlist"
              description="Add items from the GE item search to your watchlist
            and get notifications on significant price changes!"
              imageUrl="path_to_image"
            />

            <LandingPageCard
              title="Adventure Log"
              description="The Adventure Log is back! Here you can track your progress by achieving milestones,"
              imageUrl="path_to_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
