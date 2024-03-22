/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import skillImages from "../../images/skillImages";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (
    !playerSkillsData ||
    !playerSkillsData.skills ||
    playerSkillsData.skills.length === 0
  ) {
    return <div className="text-gray-300">No player stats available.</div>;
  }

  return (
    <div className="min-w-full">
      <h1 className="text-gray-300 text-xl font-bold mb-2 align-start">
        {user.rsn}'s Skills
      </h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <div className="text-gray-300 font-bold">Skill</div>
            <div className="text-gray-300 font-bold text-center">Level</div>
            <div className="text-gray-300 font-bold text-center">EXP</div>
          </div>
          {playerSkillsData.skills.map((skill, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 items-center">
              <div className="flex items-center text-white">
                <img
                  className="w-6 h-6 mr-2"
                  src={skillImages[skill.name]}
                  alt={skill.name}
                />
                <span>{skill.name}</span>
              </div>
              <div className="text-center text-white">{skill.level}</div>
              <div className="text-center text-white">
                {skill.xp.toLocaleString()} XP
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
