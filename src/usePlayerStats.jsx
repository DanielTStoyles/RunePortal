/** @format */

import { useState, useEffect } from "react";

const fetchPlayerStats = async (playerName) => {
  try {
    const response = await fetch(`/api/playerStats/${playerName}`);
    const data = await response.text();
    console.log("Raw data:", data);

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

    const playerStats = data
      .trim()
      .split("\n")
      .slice(0, skills.length)
      .map((line, index) => {
        const [rank, level, experience] = line
          .split(",")
          .map((value) => parseInt(value.toString().trim(), 10));

        return {
          skill: skills[index],
          rank,
          level,
          experience,
        };
      });
    console.log("Parsed playerStats:", playerStats);

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
