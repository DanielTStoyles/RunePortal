/** @format */

import connection from "../database.js";
import insertPlayerBossData from "../data/insertPlayerData.js";

const OSRS_BASE_URL =
  "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws";

export const playerStatsByName = async (req, res) => {
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

export const addPlayerBossData = async (req, res) => {
  const { playerId, playerBossData } = req.body;

  try {
    await insertPlayerBossData(playerId, playerBossData);
    res.json({ message: "Boss data added sccuessfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding boss data" });
  }
};
