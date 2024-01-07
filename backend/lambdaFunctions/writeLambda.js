/** @format */

import detectChanges from "./detectChanges";
import writeAdventureLogs from "./writeAdventureLogs";
import updatePlayerData from "./updatePlayerData";
import getExistingPlayerData from "./existingPlayerData";

exports.handler = async (event) => {
  try {
    const playerData = event;
    const playerId = playerData.playerId;

    const existingData = await getExistingPlayerData(playerId);

    const changes = detectChanges(existingData, playerData);

    if (changes.length > 0) {
      await updatePlayerData(playerId, playerData);

      await writeAdventureLogs(playerId, changes);
    }
  } catch (error) {
    console.error(`Error processing player data for ${playerId}:`, error);
    throw error;
  }
};
