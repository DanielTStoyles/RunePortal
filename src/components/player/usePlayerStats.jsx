/** @format */

import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

const fetchPlayerStats = async (playerName) => {
  try {
    const response = await fetch(`/api/playerStats/${playerName}`);
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

const usePlayerStats = () => {
  const { user } = useContext(UserContext);
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      if (user && user.rsn) {
        setLoading(true);
        setError(null);

        const stats = await fetchPlayerStats(user.rsn);

        if (stats) {
          setPlayerStats(stats);
        } else {
          setError("Failed to fetch player stats.");
        }

        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [user]);

  return { playerStats, loading, error };
};

export default usePlayerStats;
