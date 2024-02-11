/** @format */

const OSRS_BASE_URL =
  "https://secure.runescape.com/m=hiscore_oldschool/index_lite.json";

const normalizePlayerData = (statsData) => {
  return {
    ...statsData,
    skills: statsData.skills.map((skill) => {
      return {
        id: skill.id,
        level: skill.level,
        xp: skill.xp,
        name: skill.name,
      };
    }),
    activities: statsData.activities.map((activities) => {
      return {
        id: activities.id,
        name: activities.name,
        score: activities.score,
      };
    }),
  };
};

const getPlayerData = async (playerId) => {
  const response = await fetch(
    `${OSRS_BASE_URL}?player=${encodeURIComponent(playerId)}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    return {
      error: true,
      message: `No player by the name ${playerId} was found, if you have changed your in-game name please edit the player info`,
    };
  }
  const statsData = await response.json();
  // console.log(statsData, "THIS IS THE STATS DATA, getPlayerData.js");

  return { ...normalizePlayerData(statsData), playerId: playerId };
};

export default getPlayerData;
