/** @format */

import React, { useState } from "react";

const AdventureLogQuestComponent = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const quests = [
    "A Clockwork Syringe",
    "A Rum Deal",
    "A Soul's Bane",
    "A Tail of Two Cats",
    "A Void Dance",
    "All Fired Up",
    "Animal Magnetism",
    // ... add more quests as needed
  ];

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-lg w-full">
      <div className="mb-4 border-b border-gray-700">
        <ul className="flex justify-center -mb-px">
          <li
            className={`mr-2 ${
              activeTab === "completed" ? "text-yellow-300" : ""
            }`}
            onClick={() => changeTab("completed")}
          >
            Completed
          </li>
          <li
            className={`mr-2 ${
              activeTab === "started" ? "text-yellow-300" : ""
            }`}
            onClick={() => changeTab("started")}
          >
            Started
          </li>
          <li
            className={`${activeTab === "notStarted" ? "text-yellow-300" : ""}`}
            onClick={() => changeTab("notStarted")}
          >
            Not Started
          </li>
        </ul>
      </div>
      <div className="h-48 overflow-y-auto">
        <ul>
          {quests.map((quest, index) => (
            <li key={index} className="py-1 border-b border-gray-700">
              {quest}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>Page 1 of 27</span>
        <div>
          <button className="bg-gray-700 p-1 rounded mr-2">{"<"}</button>
          <button className="bg-gray-700 p-1 rounded">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default AdventureLogQuestComponent;
