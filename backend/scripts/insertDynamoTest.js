/** @format */

// dynamoDbInsertTest.js
import { insertIntoDynamoDB } from "./insertPlayerItem.js";

// Sample test data
const testPlayerData = {
  playerId: "TestPlayer123",
  logTimeStamp: Date.now().toString(),
  skills: [
    { skill: "Fishing", level: 20, experiencePoints: 1500 },
    { skill: "Cooking", level: 15, experiencePoints: 1000 },
    // Add other skills as needed
  ],
  bosses: [
    { boss: "Zulrah", rank: 1, score: 500 },
    // Add other bosses as needed
  ],
  clueScrolls: [
    { scroll: "Hard", rank: 2, score: 300 },
    // Add other clue scrolls as needed
  ],
  miniGames: [
    { game: "Pest Control", rank: 3, score: 400 },
    // Add other minigames as needed
  ],
};

// Function to run the test
const runTest = async () => {
  try {
    await insertIntoDynamoDB(testPlayerData);
    console.log("Test data inserted successfully");
  } catch (error) {
    console.error("Error during test data insertion:", error);
  }
};

runTest();
