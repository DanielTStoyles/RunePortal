/** @format */

import React from "react";

const AdventureLogFriendRecentEvents = () => {
  const events = [
    { id: 1, text: "I killed 2 boss monsters in Daemonheim." },
    {
      id: 2,
      text: "I killed 2 boss monsters called: Shadow-forger Ihlakhizan in Daemonheim. (09-April-2011 09:15)",
    },
    { id: 3, text: "I killed Bork." },
    { id: 4, text: "Hard treasure trail completed." },
    { id: 5, text: "I killed 15 boss monsters in Daemonheim" },
    { id: 6, text: "I killed a skeletal horror." },
    { id: 7, text: "Levelled up Crafting." },
    { id: 8, text: "I killed Bork." },
    { id: 9, text: "Levelled up Crafting." },
    { id: 10, text: "I killed 2 boss monsters in Daemonheim" },
    { id: 11, text: "Levelled all skills over 69" },
  ];

  return (
    <div className="max-w-md w-full bg-gray-800 rounded-lg p-4 overflow-hidden shadow-lg">
      <h2 className="font-bold text-xl mb-2 text-white">
        Friends Recent Events
      </h2>
      <ul className="h-64 overflow-y-auto">
        {events.map((event) => (
          <li key={event.id} className="mb-1 text-white">
            {event.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdventureLogFriendRecentEvents;
