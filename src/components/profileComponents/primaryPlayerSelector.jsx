/** @format */

import React from "react";
import DropdownButton from "./DropdownButton";
import SelectedPlayerName from "../../hooks/SelectedPlayerName";
import gnome_funny from "../../images/gnome_funny.png";
import ironMode from "../../images/ironMode.png";

const PrimaryPlayerSelector = () => {
  return (
    <div className="flex gap-4 rounded items-start min-w-[410px]">
      {/* Avatar */}
      <img
        className="w-20 h-20 relative rounded-[47px]"
        src={gnome_funny}
        alt="Player Avatar"
      />

      {/* Right column for player's name, account type, and icons */}
      <div className="flex flex-col justify-center ">
        {/* Player's name */}
        <div className="text-white text-[36px] font-bold">
          <SelectedPlayerName />
        </div>

        {/* Account type and its icon */}
        <div className="flex items-center text-gray-400 text-base mt-2">
          <img src={ironMode} alt="overall xp icon" className="w-5 h-5 mr-2" />
          {/* <img src={overall} alt="overall xp icon" className="w-5 h-5 mr-2" /> */}
          <p>Ironman</p>

          {/* <AccountType /> */}
        </div>
      </div>

      <DropdownButton />
    </div>
  );
};

export default PrimaryPlayerSelector;
