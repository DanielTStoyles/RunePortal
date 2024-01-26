/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import skillImages from "../../images/skillImages";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (!playerSkillsData || playerSkillsData.length === 0) {
    return <div className="text-white">No player stats available.</div>;
  }

  return (
    <div className="min-w-2/3 pl-16">
      {" "}
      {/* Added p-4 for padding */}
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
              <div className="text-left font-bold">Rank</div>
            </div>
            {playerSkillsData.playerSkillsData.map((stat, index) => (
              <div
                key={`${stat.skill}-${index}`}
                className="grid grid-cols-4 gap-4 p-2"
              >
                <div className="flex items-center">
                  {index !== 0 && (
                    <img
                      className="w-6 h-6 mr-2"
                      src={skillImages[stat.skill]}
                      alt={stat.skill}
                    />
                  )}
                  <span>{stat.skill}</span>
                </div>
                <div className="text-left">{stat.level}</div>
                <div className="text-left">
                  {stat.experience.toLocaleString()}
                </div>
                <div className="text-left">{stat.rank.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
