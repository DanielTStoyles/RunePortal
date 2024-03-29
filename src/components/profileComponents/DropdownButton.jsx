/** @format */

import React, { useState, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import AuthContext from "../../context/AuthContext";

const fetchUserAccList = async () => {
  const response = await fetch("/api/getUserAccList");
  if (!response.ok) {
    throw new Error("Network response returned !ok");
  }
  return response.json();
};

const UserAccList = () => {
  const { data, error, isLoading } = useQuery("userAccList", fetchUserAccList);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedAcc, setSelectedAcc] = useState("");
  const { setUser } = useContext(AuthContext);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleOptionClick = async (rsn) => {
    try {
      const response = await fetch("/api/updateRsn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newRsn: rsn }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // "RSN updated successfully"
        setSelectedAcc(rsn); // local state update of new rsn

        // pdate the user context with newRsn
        setUser((currentUser) => ({ ...currentUser, rsn }));
      } else {
        throw new Error(data.message || "Failed to update RSN");
      }
    } catch (error) {
      console.error("Error updating RSN:", error.message);
    }

    setIsDropdownVisible(false);
  };

  return (
    <div className="relative w-24">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 border-2 border-slate-500 px-4 py-2 rounded bg-dropButton-color"
      >
        <ChevronDownIcon className="w-5 h-5 text-white" />
      </button>

      {isDropdownVisible && (
        <div className="absolute w-32 left-0 right-0 mt-1 border border-slate-200 rounded shadow-lg z-10 bg-white">
          <ul className="max-h-60 overflow-auto">
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
