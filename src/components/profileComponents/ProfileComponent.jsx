/** @format */

import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import CurrentUsername from "../CurrentUsername";
import RsnRegisterForm from "../forms/RsnRegisterForm";
import UserAccList from "../../hooks/RegisteredAccFetch";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import SideBar from "../Nav Components/SideBarComp";
import NavBarComponent from "../Nav Components/TopNavBarComponent";
import PrimaryPlayerSelector from "./primaryPlayerSelector";
import ProfileSkillsDisplay from "./profileSkillsDisplay";
import ProfileAdventureLog from "./ProfileAdventureLog";
import ProfileWatchlist from "./ProfileWatchlist";
import BigTest from "./BigTest";

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
      <div className="flex flex-col items-center w-full gap-4 bg-runeportal-darkpurple">
        <NavBarComponent pageName="Profile" />

        <div>
          <PrimaryPlayerSelector />
        </div>
        {/* 
        <div className="relative items-center ">
          <h2 className=" p-3 text-slate-50 text-xl">Registered Accounts</h2>
          <UserAccList />
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white">
            Haven't registered your account yet? Click the button below to get
            started!
          </h3>
          <button
            onClick={handleClick}
            className="relative w-1/4 py-2 px-4 
            border border-lime-400 text-md font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 
            focus:outline-none focus:ring-2 focus:ring-lime-600"
          >
            {showForm ? "Hide" : "Show"}
          </button>
          {showForm && <RsnRegisterForm />}
          <BigTest />
        </div>
        <div>
          {/* <PlayerStatsDisplay playerSkillsData={profileData} /> */}
          <ProfileSkillsDisplay playerSkillsData={profileData} />
          <ProfileWatchlist />
        </div>

        {/* <div className="mb-4">
          <GeWatchlistProfileDisplay />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileComponent;
