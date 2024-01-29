/** @format */

import { fetchAdventurePlayerData } from "../controllers/adventureLogController.js";
import getRunescapeProfile from "../../src/hooks/getRunescapeProfile.js";
import comparePlayerData from "./diff.js";
import writeLogEntry from "./writeLogEntry.js";

const processPlayerData = async (playerId) => {
  try {
    const oldData = await fetchAdventurePlayerData(playerId);
    const newData = await getRunescapeProfile(playerId);
    console.log(playerId, newData);

    const differences = comparePlayerData(oldData, newData);

    if (differences) {
      differences.forEach((difference) => {
        writeLogEntry(playerId, difference);
      });
    }
  } catch (error) {
    console.error("Error processing player data:", error);
  }
};

export default processPlayerData;
