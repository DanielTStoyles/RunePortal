/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import skillImages from "../../images/skillImages";
import CircleProgress from "./CircleProgress";
import { calculateProgressToNextLevel } from "../../util/osrsUtil";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (!playerSkillsData || playerSkillsData.length === 0) {
    return <div className="text-white">No player stats available.</div>;
  }

  return (
    <div className="text-white">
      <h2 className="text-center mb-4">{user.rsn}'s Stats</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="grid grid-cols-5 gap-4 mb-2">
            <div className="text-right font-bold">Skill</div>
            <div className="text-right font-bold">Level</div>
            <div className="text-right font-bold">Exp.</div>
            <div className="text-right font-bold">Rank</div>
            {/* <div className="text-right font-bold">% to Next Level</div> */}
          </div>
          {playerSkillsData.playerSkillsData.map((stat, index) => (
            <div
              key={`${stat.skill}-${index}`}
              className="grid grid-cols-4 gap-4 items-center bg-gray-700 rounded p-2 mb-2"
            >
              <div className="flex items-center">
                <img
                  className="w-6 h-6 mr-2"
                  src={skillImages[stat.skill]}
                  alt={stat.skill}
                />
                <span>{stat.skill}</span>
              </div>
              <div>{stat.level}</div>
              <div>{stat.experience.toLocaleString()} </div>
              <div>{stat.rank.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
