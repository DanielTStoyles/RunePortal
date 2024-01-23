/** @format */

import React from "react";
import DropdownButton from "./dropdownButton";
import CurrentUsername from "../CurrentUsername";
import AccountType from "../AccountType";

const PrimaryPlayerSelector = () => {
  return (
    <div className="flex items-center gap-6 px-4 py-2 rounded">
      <div className=" align-left bg-gray-300 rounded-full w-20 h-20"></div>
      {/* Avatar */}
      <div className="flex flex-col">
        <span className="text-white text-xl font-bold">
          <CurrentUsername />
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
