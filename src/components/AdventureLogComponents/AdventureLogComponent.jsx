/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import MainPageLayout from "../../pages/MainPageLayout";
import AdventureLogSkillsGrid from "./AdventureLogSkillsGrid";
import PrimaryPlayerSelector from "../profileComponents/primaryPlayerSelector";
import AdventureLogBossDisplay from "./AdventureLogBossDisplays";
import AdventureLogClueDisplay from "./AdventureLogClueDisplay";
import AdventureLogMinigameDisplay from "./AdventureLogMinigameDisplay";
import AdventureLogLevel from "./AdventureLogLevel";
import AdventureLogSkillProgress from "./AdventureLogSkillProgress";

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

  const playerId = user.rsn;

  return (
    <MainPageLayout pageTitle="Adventure Log">
      <div className="p-4">
        <div className="flex justify-start mb-4">
          <PrimaryPlayerSelector />
        </div>
        {/* Center AdventureLogSkillsGrid */}
        <div className="flex justify-center mb-4">
          <AdventureLogSkillsGrid playerSkillsData={playerSkillsData} />
        </div>

        <div>
          <AdventureLogSkillProgress playerSkillsData={playerSkillsData} />
        </div>

        <div>
          <AdventureLogLevel className="p-4 rounded-lg" />
        </div>
        {/* Log displays in a row */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 justify-center">
          <div className="p-4 rounded-lg">
            <AdventureLogBossDisplay playerId={playerId} />
          </div>
          <div className="p-4 rounded-lg">
            <AdventureLogClueDisplay playerId={playerId} />
          </div>
          <div className="p-4 rounded-lg">
            <AdventureLogMinigameDisplay playerId={playerId} />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default AdventureLogBook;
