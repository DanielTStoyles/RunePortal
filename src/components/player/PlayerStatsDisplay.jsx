/** @format */

import React from "react";
import usePlayerStats from "./usePlayerStats";
import styles from "./PlayerStatsDisplay.module.css";

const skillImages = {
  Attack: "/images/attack.png",
  Defence: "/images/defence.png",
  Strength: "/images/strength.png",
  Hitpoints: "/images/hitpoints.png",
  Ranged: "/images/ranged.png",
  Prayer: "/images/prayer.png",
  Magic: "/images/magic.png",
  Cooking: "/images/cooking.png",
  Woodcutting: "/images/woodcutting.png",
  Fletching: "/images/fletching.png",
  Fishing: "/images/fishing.png",
  Firemaking: "/images/firemaking.png",
  Crafting: "/images/crafting.png",
  Smithing: "/images/smithing.png",
  Mining: "/images/mining.png",
  Herblore: "/images/herblore.png",
  Agility: "/images/agility.png",
  Thieving: "/images/thieving.png",
  Slayer: "/images/slayer.png",
  Farming: "/images/farming.png",
  Runecraft: "/images/runecraft.png",
  Hunter: "/images/hunter.png",
  Construction: "/images/construction.png",
};

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
      <h2 className={styles.center}>{playerName}'s Stats</h2>
      <ul className={styles.statsList}>
        {playerStats.map((stat, index) => (
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
