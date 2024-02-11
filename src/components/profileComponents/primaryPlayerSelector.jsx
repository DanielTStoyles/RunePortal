/** @format */

import React from "react";
import DropdownButton from "./DropdownButton";
import SelectedPlayerName from "../../hooks/SelectedPlayerName";
import AccountType from "../../hooks/AccountType";

const PrimaryPlayerSelector = () => {
  return (
    <div className="flex gap-6 px-4 py-2 rounded">
      <div className=" align-left bg-gray-300 rounded-full "></div>
      {/* Avatar */}
      <div className="flex flex-col">
        <span className="text-white text-xl font-bold">
          <SelectedPlayerName />
        </span>
        <span className="text-gray-400 text-base">
          {" "}
          <AccountType />
        </span>
      </div>
      <DropdownButton />
    </div>
  );
};

export default PrimaryPlayerSelector;
