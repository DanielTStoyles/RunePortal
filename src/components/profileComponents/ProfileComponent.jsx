/** @format */

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import RsnRegisterForm from "../forms/RsnRegisterForm";
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

  return (
    <MainPageLayout pageTitle="Profile">
      {/* Container for the entire page content */}
      <div className="p-4">
        {/* Top bar section with Profile selector and stats */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
          <PrimaryPlayerSelector />
          <CombatLevelData />
          <OverallXpData />
          <OverallLvlData />
        </div>

        {/* Main Content Area */}
        {/* This container will hold both the Skills and Adventure Log side by side */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Skills Section */}
          <div className="bg-gray-800 rounded-lg p-4">
            <PlayerStatsDisplay playerSkillsData={profileData} />
          </div>

          {/* Adventure Log Section */}
          <div className="bg-gray-800 rounded-lg p-4 flex">
            <AdventureLogProfileDisplay />
          </div>
        </div>
      </div>
    </MainPageLayout>

    // <MainPageLayout pageTitle="Profile">
    //   <div className="justify-start items-center gap-4 inline-flex">
    //     <div className="pl-8">
    //       <PrimaryPlayerSelector />
    //       <RsnRegisterForm />
    //     </div>

    //     {/* This div is used to group the data bars and push them to the right */}
    //     <div className="justify-between items-center inline-flex">
    //       <CombatLevelData />
    //       <OverallXpData />
    //       <OverallLvlData />
    //     </div>

    //     <div className="text-white">
    //       <div className="flex-col justify-start items-start gap-4 inline-flex">
    //         <PlayerStatsDisplay playerSkillsData={profileData} />
    //       </div>
    //       {/* AdventureLogProfileDisplay */}
    //       <div className="">
    //         <AdventureLogProfileDisplay />
    //       </div>
    //     </div>
    //   </div>
    // </MainPageLayout>
  );
};

export default ProfileComponent;
