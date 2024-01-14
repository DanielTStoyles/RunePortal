/** @format */

// import insertPlayerBossData from "../data/insertPlayerBossData.js";

const OSRS_BASE_URL =
  "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws";

export const playerDataByName = async (req, res) => {
  try {
    const { playerName } = req.params;
    console.log(playerName, "playerName Log");
    const response = await fetch(
      `${OSRS_BASE_URL}?player=${encodeURIComponent(playerName)}`
    );
    if (!response.ok) {
      throw new Error(
        `server response ${response.status}: ${response.statusText}`
      );
    }
    const statsData = await response.text();

    res.send(statsData);
  } catch (error) {
    res
      .status(500)
      .send(
        `Error fetching player data line 23 playerController: ${error.message}`
      );
  }
};

// export const getPlayerBossData = async (req, res) => {
//   const { playerId, playerBossData } = req.body;

//   try {
//     await insertPlayerBossData(playerId, playerBossData);
//     res.json({ message: "Boss data added sccuessfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding boss data" });
//   }
// };

// export const getProfileAdventureLog = async (req, res) => {
//   try {
//     const { playerName } = req.params;
//     console.log(playerName, "playerName log getPlayerAdventure function");
//     const response = await fetch(
//       `https://apps.runescape.com/runemetrics/profile/profile?user=${encodeURIComponent(
//         playerName
//       )}&activities=20`
//     );

//     if (!response.ok) {
//       throw new Error(
//         `server response ${response.status}: ${response.statusText}`
//       );
//     }
//     const adventureLogResponse = await response.json();
//     response.send(adventureLogResponse);
//   } catch (error) {
//     res
//       .status(500)
//       .send(
//         `error fetching adventure log getPlayerAdventure function: ${error.message}`
//       );
//   }
// };
