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
    return <div className="text-white">No player stats available.</div>;
  }

  return (
    <div className="min-w-2/3">
      <div className="text-white text-zinc-200 text-2xl font-bold font-['Arial']">
        {user.rsn}'s Skills
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full text-white">
          <div className="bg-gray-700 rounded-lg">
            <div className="grid grid-cols-4 gap-4 p-2">
              <div className="text-left font-bold">Skill</div>
              <div className="text-left font-bold">Level</div>
              <div className="text-left font-bold">Exp.</div>
            </div>
            {playerSkillsData.skills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="grid grid-cols-4 gap-4 p-2"
              >
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mr-2"
                    src={skillImages[skill.name]}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </div>
                <div className="text-left">{skill.level}</div>
                <div className="text-left">{skill.xp.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
