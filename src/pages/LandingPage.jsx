/** @format */

import React from "react";
import LandingPageCard from "../components/landingPage/LandingPageDescriptionCard";
import RunePortalLogo1 from "../images/RunePortalLogo1.png";
import MainPageLayout from "./MainPageLayout";
import landingProgress from "../images/landingProgress.png";
import geLanding from "../images/geLanding.png";
import scrollLanding from "../images/scrollLanding.png";
import slogan from "../images/slogan.png";
import welcome from "../images/welcome.png";

const LandingPage = () => {
  return (
    <MainPageLayout pageTitle="Home">
      {/* Make this container grow to fill the space and center its children */}
      <div>
        <div className="flex-grow flex flex-col items-center">
          <div className="mb-6">
            <img src={welcome} alt="Welcome" />{" "}
          </div>
          <img
            src={RunePortalLogo1}
            alt="RunePortal Logo"
            className="w-[254px] h-[300px] mb-6"
          />
          <img src={slogan} alt="Runeportal Slogan" />
        </div>

        {/* Cards Container Centered */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LandingPageCard
              title="Track Progress"
              description="Track the progress of all your OSRS accounts, as well as other players!"
              imageUrl={landingProgress}
            />
            <LandingPageCard
              title="Grand Exchange Price Tracker"
              description="View live item prices on the Grand Exchange!"
              imageUrl={geLanding}
            />
            <LandingPageCard
              title="Adventure Log"
              description="The adventure log is BACK! Track your progress in the world of Gilenor with your own personal adventure log for each character"
              imageUrl={scrollLanding}
            />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default LandingPage;
