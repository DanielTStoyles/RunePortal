/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import skillImages from "../../images/skillImages";
import overall from "../../images/overall.png";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (
    !playerSkillsData ||
    !playerSkillsData.skills ||
    playerSkillsData.skills.length === 0
  ) {
    return <div className="text-gray-300">No player stats available.</div>;
  }

  // Function to calculate % to next level and % to 99 would go here
  // For simplicity, placeholder functions are used
  const calculatePercentToNextLevel = (skill) => {
    // Placeholder calculation
    return "XX%";
  };

  const calculatePercentTo99 = (skill) => {
    // Placeholder calculation
    return "YY%";
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-xl font-bold mb-4">
        Next Level Up Progress
      </h1>
      <div className="w-[700px] h-[400px] overflow-y-auto bg-zinc-800 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4 items-center mb-4">
          <div className="text-white font-bold">Skill</div>
          <div className="text-white font-bold text-center">
            % to Next Level
          </div>
          <div className="text-white font-bold text-center">% to Max. Exp.</div>
        </div>
        {playerSkillsData.skills.slice(1).map((skill, index) => (
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
              <div className="w-full bg-gray-700 rounded-full h-4 dark:bg-gray-700 mr-2">
                <div
                  className="bg-purple-600 h-4 rounded-full"
                  style={{ width: calculatePercentToNextLevel(skill) }}
                ></div>
              </div>
              <span className="text-sm">
                {calculatePercentToNextLevel(skill)}% to Lvl. {skill.nextLevel}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-700 rounded-full h-4 dark:bg-gray-700">
                <div
                  className="bg-purple-600 h-4 rounded-full"
                  style={{ width: calculatePercentTo99(skill) }}
                ></div>
              </div>
              <span className="text-sm">
                {calculatePercentTo99(skill)}% to Max. Exp.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
