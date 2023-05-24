/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./PlayerStatsDisplay.module.css";
import { UserContext } from "../../context/UserContext.jsx";
import getRunescapeProfile from "../../repository/getRunescapeProfile";

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

const PlayerStatsDisplay = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);
  console.log({ user });
  const rsn = user.rsn;
  console.log({ rsn });

  useEffect(() => {
    const GetPlayerData = async () => {
      const resp = await getRunescapeProfile(rsn);
      console.log({ resp });
      if (resp) {
        setPlayerData(resp);
        setLoading(false);
      } else {
        setError(true);
      }
    };
    GetPlayerData();
  }, [user]);

  if (!user || !rsn) {
    return <div>No player stats available.</div>;
  }

  if (loading) {
    return <div>Loading player stats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className={styles.center}>{rsn}'s Stats</h2>
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
