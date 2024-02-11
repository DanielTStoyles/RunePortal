/** @format */

import React, { useContext } from "react";
import avatarImage from "../../images/gnome_funny.png";
import AuthContext from "../../context/AuthContext";

const AdventureLogProfileCard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-runeportal-cardBackground rounded-lg p-4 max-w-sm w-full ml-8">
      <div className="flex items-center space-x-4">
        <img
          src={avatarImage}
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-lg text-white font-bold">{user.rsn}</h2>
          <p className="text-gray-300">Account Type: Ironman</p>
          <p className="text-gray-300">Time Played: 228 days 7 hours</p>
        </div>
      </div>
      <div className="flex justify-end mt-4 "></div>
    </div>
  );
};

export default AdventureLogProfileCard;
