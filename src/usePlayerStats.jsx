/** @format */

import { useState, useEffect } from "react";

const fetchPlayerStats = async (playerName) => {
  const baseUrl =
    "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws";
  const playerUrl = `${baseUrl}?player=${encodeURIComponent(playerName)}`;

  try {
    const response = await fetch(playerUrl);
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }

    const skills = [
      "Overall",
      "Attack",
      "Defence",
      "Strength",
      "Hitpoints",
      "Ranged",
      "Prayer",
      "Magic",
      "Cooking",
      "Woodcutting",
      "Fletching",
      "Fishing",
      "Firemaking",
      "Crafting",
      "Smithing",
      "Mining",
      "Herblore",
      "Agility",
      "Thieving",
      "Slayer",
      "Farming",
      "Runecraft",
      "Hunter",
      "Construction",
    ];

    const playerStats = data.split("\n").map((line, index) => {
      const [rank, level, experience] = line.split(",");
      return {
        skill: skills[index],
        rank: parseInt(rank, 10),
        level: parseInt(level, 10),
        experience: parseInt(experience, 10),
      };
    });

    return playerStats;
  } catch (error) {
    console.error(`Error fetching player data: ${error.message}`);
    return null;
  }
};

const usePlayerStats = (playerName) => {
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPlayerStats(playerName)
      .then((stats) => {
        setPlayerStats(stats);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [playerName]);

  return { playerStats, loading, error };
};

export default usePlayerStats;
