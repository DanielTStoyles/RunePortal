/** @format */

// Import the fetchAdventureLog function
import { fetchAdventureLog } from "../controllers/adventureLogController.js";
// Define a test playerId - replace 'testPlayerId' with a valid playerId
const testPlayerId = "Wuglington";

// Call fetchAdventureLog and log the results
(async () => {
  try {
    const logs = await fetchAdventureLog(testPlayerId);
    console.log("Fetched logs:", logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
  }
})();
