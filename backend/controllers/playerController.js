/** @format */

import connection from "../database.js";

export const playerStatsByName = async (req, res) => {
  try {
    const { playerName } = req.params;
    console.log(playerName);
    const response = await fetch(
      `${OSRS_BASE_URL}?player=${encodeURIComponent(playerName)}`
    );
    if (!response.ok) {
      throw new Error(
        `server response ${response.status}: ${response.statustText}`
      );
    }
    const statsData = await response.text();
    console.log(statsData);

    res.send(statsData);
  } catch (error) {
    res.status(500).send(`Error fetching player data: ${error.message}`);
  }
};
