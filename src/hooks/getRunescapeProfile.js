/** @format */
import { skills, clueScrolls, bosses, miniGames } from "../repository/lists.js";

const getRunescapeProfile = async (rsn) => {
  try {
    const response = await fetch(`/api/playerData/${rsn}`);
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }

    const dataLines = data.trim().split("\n");

    const playerSkillsData = dataLines
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

    const playerBossData = dataLines.slice(37, 37 + bosses.length);

    const playerClueScrolls = dataLines.slice(30, 30 + clueScrolls.length);

    const playerMiniGames = [
      ...dataLines.slice(24, 29),
      ...dataLines.slice(37, 40),
    ];

    return {
      playerSkillsData,
      playerBossData,
      playerClueScrolls,
      playerMiniGames,
    };
  } catch (error) {
    console.error(
      `Error fetching player data line 47 in getRunescapeProfile: ${error.message}`
    );
    return null;
  }
};

export default getRunescapeProfile;
