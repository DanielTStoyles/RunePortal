/** @format */

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import RsnRegisterForm from "../forms/RsnRegisterForm";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import PrimaryPlayerSelector from "./primaryPlayerSelector";
import AdventureLogProfileDisplay from "../AdventureLogComponents/AdventureLogProfileDisplay";
import { CombatLevelData, OverallLvlData, OverallXpData } from "./DataBars";
import MainPageLayout from "../../pages/MainPageLayout";

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
      <div className="flex items-center p-4">
        <div className="pl-8">
          <PrimaryPlayerSelector />
          <RsnRegisterForm />
        </div>

        {/* This div is used to group the data bars and push them to the right */}
        <div className="flex space-x-8 pl-32">
          <CombatLevelData />
          <OverallXpData />
          <OverallLvlData />
        </div>
      </div>

      {/* Flex container for ProfileSkillsDisplay and AdventureLogProfileDisplay */}
      <div className="flex w-full">
        ProfileSkillsDisplay
        <div className="flex-grow p-4"></div>
        {/* AdventureLogProfileDisplay */}
        <div className="w-1/3 p-4">
          <AdventureLogProfileDisplay />
        </div>
      </div>
    </MainPageLayout>
  );
};

export default ProfileComponent;
