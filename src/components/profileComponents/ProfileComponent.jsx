/** @format */

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import PrimaryPlayerSelector from "./primaryPlayerSelector";
import AdventureLogProfileDisplay from "../AdventureLogComponents/AdventureLogProfileDisplay";
import { CombatLevelData, OverallLvlData, OverallXpData } from "./DataBars";
import MainPageLayout from "../../pages/MainPageLayout";
import PlayerStatsDisplay from "./ProfileSkillsDisplay";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";

const ProfileComponent = () => {
  const { user } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["runescapeProfile", user.rsn],
    () => getRunescapeProfile(user.rsn),
    {
      enabled: !!user.rsn,
    }
  );

  if (isError) {
    console.error("error fetching profile data:", error);
  }

  const playerId = user.rsn;

  return (
    <MainPageLayout pageTitle="Profile">
      {/* Container for the entire page content */}
      <div className="p-4">
        {/* Top bar section with Profile selector and stats */}
        <div className="rounded-lg pt-4 pl-4 pb-4 mb-4">
          {/* Wrapper div to move content to the right */}
          <div className="flex justify-center">
            <div className="flex flex-col  mr-5 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-5">
              <PrimaryPlayerSelector />
              <div className="p-2 lg:space-x-4">
                <CombatLevelData />
                <OverallXpData />
                <OverallLvlData />
              </div>
              {/* <RsnRegisterForm /> */}
            </div>
          </div>
        </div>
        {/* Main Content Area */}
        {/* This container will hold both the Skills and Adventure Log side by side with reduced spacing */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 justify-center">
          {/* Skills Section */}
          <div className=" flex jusitfy-start rounded-lg p-4 flex-grow lg:max-w-xl ">
            <PlayerStatsDisplay playerSkillsData={profileData} />
          </div>
          {/* Adventure Log Section */}
          <div className=" rounded-lg p-4 flex-grow lg:flex-grow-0 lg:w-1/3">
            <AdventureLogProfileDisplay playerId={playerId} />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default ProfileComponent;
