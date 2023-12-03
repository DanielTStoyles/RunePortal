/** @format */

import React from "react";

const FriendsListComponent = () => {
  const friends = [
    "Genie",
    "Party Pete",
    "Doric",
    "Neite",
    "Bob The Cat",
    "Cool Mom227",
    "Cow1337killr",
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md w-full">
      <div className="border-b border-gray-700 pb-2 mb-2">
        <h2 className="text-xl font-bold">Friends List</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {friends.map((friend, index) => (
          <div key={index} className="py-1 border-b border-gray-700">
            {friend}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <span>Page 1 of 1</span>
        {/* Pagination controls could be added here */}
      </div>
    </div>
  );
};

export default FriendsListComponent;
