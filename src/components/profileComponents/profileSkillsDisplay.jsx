/** @format */

import React from "react";

const ProfileSkillsDisplay = () => {
  // Assuming 100% progress for the example. This value should be dynamic based on the actual progress.
  const circleStyle = {
    background: "conic-gradient(#413F46 100%, transparent 80%)",
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#19181B] text-white">
      {/* Skill Icon and Name */}
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-green-500"></div>{" "}
        {/* Placeholder for icon */}
        <span className="font-semibold text-sm">Agility</span>
      </div>

      {/* Level */}
      <div className="w-12 text-center">
        <span className="text-sm">99</span>
      </div>

      {/* Experience */}
      <div className="w-20 text-center">
        <span className="text-sm">999.99m</span>
      </div>

      {/* Rank */}
      <div className="w-10 text-center">
        <span className="text-sm">1k</span>
      </div>

      {/* Circular Progress to Next Level */}
      <div className="flex items-center gap-2">
        <div className="relative">
          {/* The circle background */}
          <div className="w-6 h-6 rounded-full bg-[#28272A]"></div>
          {/* The progress circle */}
          <div
            className="w-6 h-6 rounded-full absolute top-0 left-0"
            style={circleStyle}
          ></div>
          {/* The percentage text */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <span className="text-xs text-white">100%</span>
          </div>
        </div>
        {/* Text next to the progress circle */}
        <span className="text-sm">to Lvl. 99</span>
      </div>
    </div>
  );
};

export default ProfileSkillsDisplay;
