/** @format */

import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import CurrentUsername from "./LoggedUsername";
import RsnRegisterForm from "./forms/RsnRegisterForm";
import UserAccList from "../hooks/RegisteredAccFetch";
import PlayerStatsDisplay from "./PlayerStatsDisplay";
import getRunescapeProfile from "../hooks/getRunescapeProfile";
import BossDataDisplay from "./playerBossDataDisplay";
import GeWatchlistProfileDisplay from "./GeWatchlistProfileDisplay";

const ProfileComponent = () => {
  const { user } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [playerBossData, setPlayerBossData] = useState([]);
  const [playerSkillsData, setPlayerSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        const profileData = await getRunescapeProfile(user.rsn);
        if (
          profileData &&
          profileData.playerBossData &&
          profileData.playerSkillsData
        ) {
          setPlayerBossData(profileData.playerBossData);
          setPlayerSkillsData(profileData.playerSkillsData);
        }
      } catch (error) {
        console.error("error fetching profile data:", error);
      }
    };

    if (user.rsn) {
      fetchProfileData();
    }
  }, [user.rsn]);

  return (
    <div
      className="min-h-screen bg-[url(C:\Users\Danie\Desktop\RunePortalv2\src\images\bg3.jpg)] 
    bg-repeat bg-center bg-top mx-auto 
    overflow-y-hidden flex flex-col items-center bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="top-0">
        <h1 className="p-3 text-slate-50 text-4xl">
          <CurrentUsername />
          's Profile
        </h1>
      </div>
      <div className="relative items-center ">
        <h2 className=" p-3 text-slate-50 text-xl">Registered Accounts</h2>
        <UserAccList />
      </div>
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
      </div>
      <div>
        <PlayerStatsDisplay playerSkillsData={playerSkillsData} />
      </div>
      {/* <div>
        <BossDataDisplay playerBossData={playerBossData} />
      </div> */}
      <div className="mt-6">
        <GeWatchlistProfileDisplay />
      </div>
    </div>
  );
};

export default ProfileComponent;

// if (!response.ok) {
//   throw new Error(
//     `error fetching profile adventure log: ${response.statusText}`
//   );
// }
