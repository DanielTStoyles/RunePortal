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
    throw new Error(
      `server response ${response.status}: ${response.statusText}`
    );
  }
  const statsData = await response.json();
  console.log(statsData, "THIS IS THE STATS DATA");

  return { ...normalizePlayerData(statsData), playerId: playerId };
};

export default getPlayerData;
