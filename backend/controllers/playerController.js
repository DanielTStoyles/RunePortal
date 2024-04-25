/** @format */

import getPlayerData from "../util/getPlayerData.js";

export const playerDataByName = async (req, res) => {
  try {
    const { playerName } = req.params;
    // console.log(playerName, "playerName Log");

    const playerData = await getPlayerData(playerName);
    res.send(playerData);
  } catch (error) {
    res
      .status(500)
      .send(
        `Error fetching player data line 23 playerController: ${error.message}`
      );
  }
};
