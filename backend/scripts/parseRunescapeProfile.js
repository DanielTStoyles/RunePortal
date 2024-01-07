/** @format */
import {
  skills,
  clueScrolls,
  bosses,
  miniGames,
} from "../../src/repository/lists.js";

const parseRunescapeProfile = async (rsn) => {
  try {
    const url = `http://localhost:5174/playerData/${rsn}`;

    const response = await fetch(url);
    console.log("Requesting URL:", url);
    console.log("Response from API:", response);
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }

    const dataLines = data.trim().split("\n");

    // Process Skills Data
    const playerSkillsData = dataLines
      .slice(0, skills.length)
      .map((line, index) => {
        const [rank, level, experience] = line
          .split(",")
          .map((value) => parseInt(value.trim(), 10));
        return {
          skill: skills[index],
          rank,
          level,
          experience,
        };
      });

    // Process Bosses Data
    const playerBossData = dataLines
      .slice(37, 37 + bosses.length)
      .map((line, index) => {
        const [rank, score] = line
          .split(",")
          .map((value) => parseInt(value.trim(), 10));
        return {
          boss: bosses[index],
          rank,
          score,
        };
      });

    // Process Clue Scrolls Data
    const playerClueScrolls = dataLines
      .slice(30, 30 + clueScrolls.length)
      .map((line, index) => {
        const [rank, score] = line
          .split(",")
          .map((value) => parseInt(value.trim(), 10));
        return {
          scroll: clueScrolls[index],
          rank,
          score,
        };
      });

    // Process Mini Games Data
    const playerMiniGames = dataLines
      .slice(24, 29)
      .concat(dataLines.slice(37, 40))
      .map((line, index) => {
        const [rank, score] = line
          .split(",")
          .map((value) => parseInt(value.trim(), 10));
        return {
          game: miniGames[index],
          rank,
          score,
        };
      });

    // Structuring data for DynamoDB insertion
    const dynamoDbItem = {
      playerId: rsn,
      skills: playerSkillsData,
      bosses: playerBossData,
      clueScrolls: playerClueScrolls,
      miniGames: playerMiniGames,
    };

    return dynamoDbItem;
  } catch (error) {
    console.error(
      `Error fetching player data for ${rsn} parseRunescapeProfile ${error.message}`
    );
    return null;
  }
};

export default parseRunescapeProfile;
