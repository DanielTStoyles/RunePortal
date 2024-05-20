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
import AdvLogTest from "./advLogTest";

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
    <MainPageLayout pageTitle="Adventure Log" centerContent={true}>
      <div>
        <div className="flex justify-start mb-4">
          <PrimaryPlayerSelector />
        </div>
        {/* Center AdventureLogSkillsGrid */}
        <div></div>
        <div className="mb-4">
          <AdventureLogSkillsGrid playerSkillsData={playerSkillsData} />
        </div>

        {/* Flex container for alignment */}
        <div className="flex justify-between mb-4 max-w-[1280px]">
          {/* Empty div for spacing, or use margin on AdventureLogLevel */}
          {/* <AdventureLogLevel playerId={playerId} className="flex-1" /> */}
          <AdvLogTest className="flex-1" />
          <AdventureLogSkillProgress
            playerSkillsData={playerSkillsData}
            className="flex-1"
          />
        </div>

        {/* Log displays in a row */}
        <div className="flex flex-1 flex-col lg:justify-between lg:flex-row space-y-4 lg:space-y-0 max-w-[1280px]">
          <div className="rounded-lg ">
            <AdventureLogBossDisplay playerId={playerId} />
          </div>
          <div className=" rounded-lg ">
            <AdventureLogClueDisplay playerId={playerId} />
          </div>
          <div className="rounded-lg">
            <AdventureLogMinigameDisplay playerId={playerId} />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default AdventureLogBook;
