/** @format */

import { useState } from "react";
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
  const [selectedAcc, setSelectedAcc] = useState("");

  if (isLoading) {
    return <span>Loading....</span>;
  }
  if (error) {
    return <span> error: {error.message} </span>;
  }

  const handleSelectChange = (event) => {
    setSelectedAcc(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        id="user-account-dropdown"
        value={selectedAcc}
        onChange={handleSelectChange}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
      >
        {data.map((entry, index) => (
          <option key={index} value={entry.rsn}>
            {entry.rsn} - {entry.account_type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserAccList;

// use combination of backend database and react-router api
