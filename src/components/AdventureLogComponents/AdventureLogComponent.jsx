/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import PlayerStatsDisplay from "../PlayerStatsDisplay";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import SideBar from "../SideBarComp";
import AdventureLogProfileCard from "../AdventureLogComponents/AdventureLogProfileCard";
import AdventureLogRecentEvents from "../AdventureLogComponents/AdventureLogEventsCard";
import AdventureLogFriendRecentEvents from "../AdventureLogComponents/AdventureLogFriendEventsCard";
import AdventureLogQuestComponent from "../AdventureLogComponents/AdventureLogQuestComponent";
import FriendsListComponent from "../AdventureLogComponents/AdventureLogFriendsListComponent";

const AdventureLogBook = () => {
  const { user } = useContext(AuthContext);
  const {
    data: playerSkillsData,
    isLoading,
    error,
  } = useQuery(
    ["runescapeProfile", user.rsn],
    () => getRunescapeProfile(user.rsn),
    {
      enabled: !!user.rsn,
    }
  );

  if (error) {
    console.error("error fetching profile data:", error);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-runeportal-background-dark">
      <SideBar />
      <div
        className="bg-gray-700 shadow-lg rounded-lg overflow-hidden ml-64"
        style={{ width: "1000px" }}
      >
        {/* Top two smaller frames */}
        <div className="flex items-center ">
          <div className=" items-center w-1/2 p-4 border-r border-gray-600">
            {/* Left Top Frame Content */}
            <AdventureLogProfileCard /> {/* ... */}
          </div>
          <div className="w-1/2 p-4">
            {/* Right Top Frame Content */}
            <PlayerStatsDisplay playerSkillsData={playerSkillsData} />
            {/* ... */}
          </div>
        </div>

        {/* Middle two larger frames */}
        <div className="flex">
          <div className="w-1/2 p-4 border-r border-gray-600">
            {/* Left Middle Frame Content */}
            <AdventureLogRecentEvents />
            {/* ... */}
          </div>
          <div className="w-1/2 p-4">
            {/* Right Middle Frame Content */}
            <AdventureLogFriendRecentEvents />

            {/* ... */}
          </div>
        </div>

        {/* Bottom two smaller frames */}
        <div className="flex">
          <div className="w-1/2 p-4 border-r border-gray-600">
            {/* Left Bottom Frame Content */}
            <AdventureLogQuestComponent /> {/* ... */}
          </div>
          <div className="w-1/2 p-4">
            {/* Right Bottom Frame Content */}
            <FriendsListComponent />
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureLogBook;