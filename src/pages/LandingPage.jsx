/** @format */

import React from "react";
import LandingPageCard from "../components/landingPage/LandingPageDescriptionCard";
import RunePortalLogo1 from "../images/RunePortalLogo1.png";
import MainPageLayout from "./MainPageLayout";
import ladningImage1 from "../images/landingImage1.jpg";
import gevectorjpg from "../images/gevectorjpg.jpg";
import scrolliconjpg from "../images/scrolliconjpg.jpg";

const LandingPage = () => {
  return (
    <MainPageLayout pageTitle="Home">
      {/* Make this container grow to fill the space and center its children */}
      <div>
        <div className="flex-grow flex flex-col items-center">
          <div className="text-[64px] text-pink-300 font-elmessiri">
            Welcome to
          </div>
          <img
            src={RunePortalLogo1}
            alt="RunePortal Logo"
            className="w-[254px] h-[300px] mb-6"
          />
          <p className="text-white text-2xl mb-8">
            Progress and Prices all in one place
          </p>
        </div>

        {/* Cards Container Centered */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LandingPageCard
              title="Track Progress"
              description="Track the progress of all your OSRS accounts, as well as other players!"
              imageUrl={ladningImage1}
            />
            <LandingPageCard
              title="Grand Exchange Price Tracker"
              description="View live item prices on the Grand Exchange!"
              imageUrl={gevectorjpg}
            />
            <LandingPageCard
              title="Adventure Log"
              description="The adventure log is BACK! Track your progress in the world of Gilenor with your own personal adventure log for each character"
              imageUrl={scrolliconjpg}
            />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default LandingPage;
