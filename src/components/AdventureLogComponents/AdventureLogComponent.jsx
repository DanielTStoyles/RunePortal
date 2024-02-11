/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import MainPageLayout from "../../pages/MainPageLayout";

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
      <MainPageLayout pageTitle="Adventure Log"></MainPageLayout>
    </div>
  );
};

export default AdventureLogBook;
