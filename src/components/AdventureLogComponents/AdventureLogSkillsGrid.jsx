/** @format */

import React from "react";
import skillImages from "../../images/skillImages";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  if (
    !playerSkillsData ||
    !playerSkillsData.skills ||
    playerSkillsData.skills.length === 0
  ) {
    return <div>No player stats available.</div>;
  }

  // Define a function to determine the color based on the skill level
  const getLevelColor = (level) => {
    // You can customize this function to return different colors based on the level
    return "text-zinc-200"; // Default text color
  };

  return (
    <div className="relative">
      <div className="w-[1280px] h-[23px] flex justify-between items-center mb-4">
        <div className="text-zinc-200 text-xl font-normal font-['Arial']">
          Skill Levels
        </div>
        <div className="flex justify-start items-center gap-1">
          <div className="w-4 h-4 relative" />
          <div className="text-stone-300 text-xs font-normal font-['Arial']">
            Last Updated: 1:00pm
          </div>
        </div>
      </div>

      <div className="w-[1280px] rounded-lg bg-gray-800">
        <div className="grid grid-cols-8 grid-rows-3 ">
          {playerSkillsData.skills.slice(0, 24).map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="h-[50px] px-6 py-4 bg-zinc-800 rounded border border-neutral-700 flex justify-center items-center gap-2"
            >
              <div className="flex-shrink-0">
                <img
                  className="w-[18px] h-[18px]"
                  src={skillImages[skill.name]}
                  alt={skill.name}
                />
              </div>
              <div className="text-zinc-500 text-base font-normal font-['Arial']">
                {skill.name}
              </div>
              <div
                className={`text-base font-normal font-['Arial'] ${getLevelColor(
                  skill.level
                )}`}
              >
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
