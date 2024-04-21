/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import skillImages from "../../images/skillImages";
import overall from "../../images/overall.png";
import { osrsXpTable } from "../../util/osrsUtil";
import CircularProgressBarComponent from "../../util/CircularProgressBar";

const AdventureLogSkillProgress = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (
    !playerSkillsData ||
    !playerSkillsData.skills ||
    playerSkillsData.skills.length === 0
  ) {
    return <div className="text-gray-300">No player stats available.</div>;
  }

  const playerSkills = playerSkillsData.skills;

  const calculatePercentToNextLevel = (currentXP, currentLevel) => {
    if (currentLevel >= osrsXpTable.length) return 100; // Return 100% if the level is at or beyond the max level in the XP table
    const xpForCurrentLevel = osrsXpTable[currentLevel - 1];
    const xpForNextLevel =
      osrsXpTable[Math.min(currentLevel, osrsXpTable.length - 1)]; // Prevent going out of bounds
    const xpIntoCurrentLevel = currentXP - xpForCurrentLevel;
    const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
    return ((xpIntoCurrentLevel / xpNeededForNextLevel) * 100).toFixed(2);
  };

  const calculatePercentTo99 = (currentXP) => {
    const xpForLevel99 = osrsXpTable[98]; // Index 98 for level 99 XP in your XP table array
    if (currentXP >= xpForLevel99) {
      return 100; // Return 100% if current XP is at or exceeds the XP for level 99
    }
    const percentTo99 = (currentXP / xpForLevel99) * 100;
    return percentTo99.toFixed(2); // Rounds to two decimal places for better readability
  };

  return (
    <div className="flex flex-col ">
      <h1 className="text-white text-xl font-bold mb-4">
        Next Level Up Progress
      </h1>
      <div className="w-[628px] h-[359px] overflow-y-auto bg-zinc-800 rounded-lg">
        <div className="grid grid-cols-3 gap-4 items-center bg-progress-back p-2 rounded-lg">
          <div className="text-white font-bold flex">
            <img className="w-6 h-6 mr-2" src={overall} alt="overall skill" />
            <p> Skill </p>
          </div>
          <div className="text-white font-bold text-start">% to Next Level</div>
          <div className="text-white font-bold text-center">% to Max. Exp.</div>
        </div>
        <div className="p-2">
          {playerSkills.slice(1).map((skill, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 items-center text-white mb-2"
            >
              <div className="flex items-center">
                <img
                  className="w-6 h-6 mr-2"
                  src={skillImages[skill.name]}
                  alt={skill.name}
                />
                {skill.name}
              </div>
              <div className="flex items-center">
                <div className="w-[25px] h-[25px]">
                  {" "}
                  {/* Adjust size as needed */}
                  <CircularProgressBarComponent
                    percentage={calculatePercentToNextLevel(
                      skill.xp,
                      skill.level
                    )}
                    text={""}
                  />
                </div>
                <span className="text-sm pl-2">
                  {calculatePercentToNextLevel(skill.xp, skill.level)}% to Lvl.{" "}
                  {skill.level + 1}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full rounded-full h-4 dark:bg-bar-back">
                  <div
                    className="bg-bar-color h-4 rounded-full"
                    style={{ width: `${calculatePercentTo99(skill.xp)}%` }}
                  ></div>
                </div>
                <span className="text-sm ml-2">
                  {calculatePercentTo99(skill.xp)}% to 99
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdventureLogSkillProgress;
