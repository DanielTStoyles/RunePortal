/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import MainPageLayout from "../../pages/MainPageLayout";
import AdventureLogSkillsGrid from "./AdventureLogSkillsGrid";
import PrimaryPlayerSelector from "../profileComponents/primaryPlayerSelector";
import {
  AdventureLogBossEntryDisplay,
  AdventureLogClueScrollDisplay,
  AdventureLogMinigameDisplay,
} from "./AdventureLogActivitiesDisplays";

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
    <div className="flex w-full bg-runeportal-darkpurple">
      <MainPageLayout pageTitle="Adventure Log">
        <PrimaryPlayerSelector />
        <AdventureLogSkillsGrid playerSkillsData={playerSkillsData} />
        <AdventureLogBossEntryDisplay />
        <AdventureLogClueScrollDisplay />
        <AdventureLogMinigameDisplay />
      </MainPageLayout>
    </div>
  );
};

export default AdventureLogBook;
