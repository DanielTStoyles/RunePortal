/** @format */

import React from "react";
import SideBar from "../components/navComponents/SideBarComp";
import LandingPageCard from "../components/landingPage/LandingPageDescriptionCard";
import RunePortalRegisterForm from "../components/forms/RunePortalRegisterForm";
import NavBarComponent from "../components/navComponents/TopNavBarComponent";
import RunePortalLogo1 from "../images/RunePortalLogo1.png";
import MainPageLayout from "./MainPageLayout";

const LandingPage = () => {
  return (
    <MainPageLayout pageTitle="Home">
      {/* Make this container grow to fill the space and center its children */}
      <div className="flex-grow flex flex-col items-center justify-center bg-runeportal-darkpurple">
        <div className="text-[64px] text-white mb-8">Welcome to</div>
        <img
          src={RunePortalLogo1}
          alt="RunePortal Logo"
          className="w-[350px] h-[350px] mb-12"
        />

        {/* Cards Container Centered */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-300 text-[32px] font-normal mb-6 text-white justify-start items-start">
            What We Do
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LandingPageCard
              title="Track Progress"
              description="Track the progress of all your OSRS accounts, as well as other players!"
              imageUrl=""
            />
            <LandingPageCard
              title="Grand Exchange Price Tracker"
              description="View live item prices on the Grand Exchange!"
              imageUrl=""
            />
            <LandingPageCard
              title="Adventure Log"
              description="The adventre log is BACK! Track your progress in the world of Gilenor with your own personal adventure log for each character"
              imageUrl=""
            />
            <LandingPageCard
              title="GE Item Watchlist"
              description="A convenient list to see items you're interested in!"
              imageUrl=""
            />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default LandingPage;
