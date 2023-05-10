/** @format */

import React from "react";
import usePlayerStats from "./usePlayerStats";

const PlayerStatsDisplay = ({ playerName }) => {
  const { playerStats, loading, error } = usePlayerStats(playerName);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!playerStats) {
    return <div>No player stats available.</div>;
  }

  return (
    <div>
      <h2>Player Stats for {playerName}</h2>
      <ul>
        {playerStats.map((stat, index) => (
          <li key={`${stat.skill}-${index}`}>
            {stat.skill}: Level {stat.level} (XP: {stat.experience}, Rank:{" "}
            {stat.rank})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerStatsDisplay;
