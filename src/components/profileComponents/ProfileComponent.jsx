/** @format */

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import CurrentUsername from "../CurrentUsername";
import RsnRegisterForm from "../forms/RsnRegisterForm";
import UserAccList from "../../hooks/RegisteredAccFetch";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import SideBar from "../navComponents/SideBarComp";
import NavBarComponent from "../navComponents/TopNavBarComponent";
import PrimaryPlayerSelector from "./primaryPlayerSelector";
import ProfileSkillsDisplay from "./profileSkillsDisplay";
import ProfileAdventureLog from "./ProfileAdventureLog";
import ProfileWatchlist from "./ProfileWatchlist";
import AdventureLogProfileDisplay from "../AdventureLogComponents/AdventureLogProfileDisplay";

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
    <div className="flex w-full bg-runeportal-darkpurple">
      <SideBar user={user} />
      <div className="flex flex-col w-full bg-runeportal-darkpurple">
        <NavBarComponent pageName="Profile" />
        <PrimaryPlayerSelector />

        {/* Flex container for ProfileSkillsDisplay and AdventureLogProfileDisplay */}
        <div className="flex w-full">
          {/* ProfileSkillsDisplay - Adjust sizing as needed */}
          <div className="flex-grow">
            <ProfileSkillsDisplay playerSkillsData={profileData} />
          </div>

          {/* AdventureLogProfileDisplay - Adjust sizing as needed */}
          <div className="w-1/3">
            <AdventureLogProfileDisplay />
          </div>
        </div>

        {/* Other components */}
        <div className="flex flex-col justify-center items-center">
          {/* ... */}
        </div>

        {/* Uncomment other components as needed */}
        {/* <PlayerStatsDisplay playerSkillsData={profileData} /> */}
        {/* <ProfileWatchlist /> */}
        {/* <GeWatchlistProfileDisplay /> */}
      </div>
    </div>
  );
};

export default ProfileComponent;
