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

  return (
    <div className="min-w-[700px]">
      <h1 className="text-header-txt text-2xl font-bold mb-2 align-start">
        {user.rsn}'s Skills
      </h1>
      <div className="bg-comp-color pt-4 pb-4 rounded-lg shadow-lg">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4 items-center mb-2 px-14">
            <div className="text-header-txt font-bold flex">
              
              <img src={overall} alt="overall xp icon" className="w-6 h-6" />
              <div className="text-header-txt font-bold text-center ml-2">Skill</div>

            </div>
            <div className="text-header-txt font-bold text-center">Level</div>
            <div className="text-header-txt font-bold text-end">EXP</div>
          </div>
          {/* Removed pl-14 and pr-14 from this div and added to each child below */}
          <div className="divide-y divide-skills-border">
            {playerSkillsData.skills.slice(1).map((skill, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-2 px-14" // Apply padding here to each row
              >
                <div className="flex text-header-txt items-center">
                  <img
                    className="w-[20px] h-[18px] mr-2"
                    src={skillImages[skill.name]}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </div>
                <div className="text-center text-header-txt">{skill.level}</div>
                <div className="text-end pr-[1px] text-header-txt">
                  {skill.xp.toLocaleString()} XP
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
