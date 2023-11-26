/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../style/PlayerStatsDisplayStyle.module.css";
import skillImages from "../images/skillImages";

const PlayerStatsDisplay = ({ playerSkillsData }) => {
  const { user } = useContext(AuthContext);

  if (!playerSkillsData || playerSkillsData.length === 0) {
    return <div className="text-white">No player stats available.</div>;
  }

  return (
    <div className="text-white">
      <h2 className={styles.center}>{user.rsn}'s Stats</h2>
      <ul className={styles.statsList}>
        {playerSkillsData.map((stat, index) => (
          <li key={`${stat.skill}-${index}`} className={styles.skillCell}>
            {stat.skill === "Overall" ? (
              <>
                Overall <span className={styles.level}> {stat.level}</span>
              </>
            ) : (
              <>
                <img
                  className={styles.skillImg}
                  src={skillImages[stat.skill]}
                  alt={stat.skill}
                  width="24"
                  height="24"
                />

                <span className={styles.level}>Level {stat.level}</span>
              </>
            )}
            <div className={styles.skillInfo}>
              (XP: {stat.experience}, Rank: {stat.rank})
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerStatsDisplay;
