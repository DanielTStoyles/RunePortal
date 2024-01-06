/** @format */

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";

const fetchUserAccList = async () => {
  const response = await fetch("/api/getUserAccList");
  if (!response.ok) {
    throw new Error("network response returned !ok");
  }
  return response.json();
};

const UserAccList = () => {
  const { data, error, isLoading } = useQuery("userAccList", fetchUserAccList);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedAcc, setSelectedAcc] = useState("");

  if (isLoading) {
    return <span>Loading....</span>;
  }
  if (error) {
    return <span> error: {error.message} </span>;
  }

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleOptionClick = (rsn) => {
    setSelectedAcc(rsn);
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative w-24">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 border-2 border-slate-500 px-4 py-2 rounded w-full"
      >
        <ChevronDownIcon className="w-5 h-5 text-white" />
      </button>

      {isDropdownVisible && (
        <div className="absolute w-32 left-0 right-0 mt-1 bg-white border border-slate-200 rounded shadow-lg z-10">
          <ul className="max-h-60 overflow-auto ">
            {data.map((entry, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(entry.rsn)}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
              >
                {entry.rsn} - {entry.account_type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAccList;
