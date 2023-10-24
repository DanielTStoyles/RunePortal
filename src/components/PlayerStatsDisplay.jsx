/** @format */

import React, { useContext } from "react";
import { useQuery } from "react-query";
import AuthContext from "../context/AuthContext";
import getRunescapeProfile from "../hooks/getRunescapeProfile";
import styles from "../style/PlayerStatsDisplayStyle.module.css";
import skillImages from "../images/skillImages";

const fetchPlayerData = async (rsn) => {
  const response = await getRunescapeProfile(rsn);
  if (!response) {
    throw new Error("Failed to fetch player data");
  }
  return response;
};

const PlayerStatsDisplay = () => {
  const { user } = useContext(AuthContext);
  const {
    data: playerData,
    isLoading,
    isError,
    error,
  } = useQuery(["playerData", user.rsn], () => fetchPlayerData(user.rsn), {
    enabled: !!user.rsn,
  });

  if (!user || !user.rsn) {
    return <div>No player stats available.</div>;
  }

  if (isLoading) {
    return <div>Loading player stats...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="text-white">
      <h2 className={styles.center}>{user.rsn}'s Stats</h2>
      <ul className={styles.statsList}>
        {playerData.map((stat, index) => (
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
