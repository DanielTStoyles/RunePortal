/** @format */

import React from "react";

const BossDataDisplay = ({ playerBossData }) => {
  return (
    <div>
      <h2>Boss Kills</h2>
      <ul>
        {playerBossData.map((bossData, index) => {
          const [bossId, killCount] = bossData.split(",").map(Number);
          return (
            <li key={index}>
              Boss ID: {bossId}, Kills: {killCount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BossDataDisplay;
