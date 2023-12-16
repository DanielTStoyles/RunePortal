/** @format */

import React, { useState } from "react";

const GeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  return (
    <div className="flex justify-center p-2 bg-runeportal-darkpurple">
      <input
        type="text"
        placeholder="Search for an item..."
        className="w-full max-w-xs p-2 rounded-l-md text-white bg-gray-800 border-0 focus:ring-2 focus:ring-gray-700 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 text-white bg-gray-700 rounded-r-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"
      >
        Search
      </button>
    </div>
  );
};

export default GeSearchBar;
