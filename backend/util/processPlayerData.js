/** @format */

import { fetchAdventurePlayerData } from "../controllers/adventureLogController.js";
import comparePlayerData from "./diff.js";
import writeLogEntry from "./writeLogEntry.js";
import getPlayerData from "./getPlayerData.js";

const processPlayerData = async (rsn) => {
  try {
    const oldData = await fetchAdventurePlayerData(rsn);
    delete oldData["logTimeStamp"];
    const newData = await getPlayerData(rsn);

    console.log(rsn, oldData, newData);

    const differences = comparePlayerData(oldData, newData);

    if (differences) {
      console.log(differences);
      differences.forEach((difference) => {
        writeLogEntry(rsn, difference);
      });
    }
  } catch (error) {
    console.error("Error processing player data:", error);
  }
};

export default processPlayerData;
