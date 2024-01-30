/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";
import getRunescapeProfile from "../../hooks/getRunescapeProfile";
import SideBar from "../navComponents/SideBarComp";

import NavBarComponent from "../navComponents/TopNavBarComponent";

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
      <SideBar user={user} />

      <div className="flex flex-col items-center w-full gap-4 bg-runeportal-darkpurple">
        <NavBarComponent pageName="Adventure Log" />
      </div>
    </div>
  );
};

export default AdventureLogBook;
