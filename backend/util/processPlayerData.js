/** @format */

import {
  fetchAdventurePlayerData,
  updateAdventureLog,
} from "../controllers/adventureLogController.js";
import comparePlayerData from "./diff.js";
import writeLogEntry from "./writeLogEntry.js";
import getPlayerData from "./getPlayerData.js";
import dbconnection from "../database.js";
import insertPlayerData from "../scripts/insertPlayerItemDynamo.js";

export const processPlayerData = async (rsn) => {
  try {
    const oldData = await fetchAdventurePlayerData(rsn);
    if (!oldData) {
      await insertPlayerData(rsn);
      return;
    }
    delete oldData["logTimeStamp"];

    const newData = await getPlayerData(rsn);

    // console.log(rsn, oldData, newData);

    const differences = comparePlayerData(oldData, newData);
    // console.log("Differences detected:", differences);

    if (differences) {
      // console.log(differences);
      differences.forEach((difference) => {
        writeLogEntry(rsn, difference);
      });
      updateAdventureLog(rsn);
    }
  } catch (error) {
    console.error("Error processing player data:", error);
  }
};

export const updateAllPlayers = async () => {
  try {
    const [players] = await dbconnection.query("SELECT rsn FROM players");

    for (const player of players) {
      await processPlayerData(player.rsn);
    }

    console.log("All players updated .");
  } catch (error) {
    console.error("Error updating all players :", error);
  }
};
