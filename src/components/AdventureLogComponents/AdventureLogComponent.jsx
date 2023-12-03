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
        <div className="flex items-center ">
          <div className=" items-center w-1/2 p-4 border-r border-gray-600">
            <AdventureLogProfileCard />
          </div>
          <div className="w-1/2 p-4">
            <PlayerStatsDisplay playerSkillsData={playerSkillsData} />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 p-4 border-r border-gray-600">
            <AdventureLogRecentEvents />
          </div>
          <div className="w-1/2 p-4">
            <AdventureLogFriendRecentEvents />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 p-4 border-r border-gray-600">
            <AdventureLogQuestComponent />
          </div>
          <div className="w-1/2 p-4">
            <FriendsListComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureLogBook;
