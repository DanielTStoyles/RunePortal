/** @format */

import AWS from "aws-sdk";
import insertPlayerData from "../scripts/insertPlayerItemDynamo.js";

export const docClient = new AWS.DynamoDB.DocumentClient();

export const fetchPlayerAdventureLog = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId, "adventureLogController log of playerId");

    const data = await fetchAdventureLog(playerId);
    res.send(data);
  } catch (error) {
    throw new error();
  }
};

export const fetchPlayerAdventureLogBoss = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId, "adventureLogController log of playerId");

    const data = await fetchAdventureLogBoss(playerId);
    res.send(data);
  } catch (error) {
    throw new error();
  }
};

export const fetchPlayerAdventureLogClue = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId, "adventureLogController log of playerId");

    const data = await fetchAdventureLogClue(playerId);
    res.send(data);
  } catch (error) {
    throw new error();
  }
};

export const fetchPlayerAdventureLogMinigame = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId, "adventureLogController log of playerId");

    const data = await fetchAdventureLogMinigame(playerId);
    res.send(data);
  } catch (error) {
    throw new error();
  }
};

export const fetchPlayerAdventureLogSkill = async (req, res) => {
  try {
    const { playerId } = req.params;
    console.log(playerId, "adventureLogController log of playerId");

    const data = await fetchAdventureLogSkill(playerId);
    res.send(data);
  } catch (error) {
    throw new error();
  }
};

export const fetchAdventureLog = async (playerId) => {
  const params = {
    TableName: "AdventureLogEntries",
    KeyConditionExpression: "playerId = :playerId",
    ExpressionAttributeValues: { ":playerId": playerId },
    ScanIndexForward: false,
    Limit: 4,
  };

  try {
    const data = await docClient.query(params).promise();
    console.log(data.Items);
    return data.Items;
  } catch (err) {
    throw err;
  }
};

export const fetchAdventureLogBoss = async (playerId) => {
  let fetchedItems = [];
  let lastEvaluatedKey = null;
  let bossEntries = [];

  try {
    do {
      const params = {
        TableName: "AdventureLogEntries",
        KeyConditionExpression: "playerId = :playerId",
        ExpressionAttributeValues: { ":playerId": playerId },
        ScanIndexForward: false,
        ExclusiveStartKey: lastEvaluatedKey,
        // Removed the limit to fetch as many as needed in each batch
      };

      const data = await docClient.query(params).promise();
      fetchedItems = data.Items;
      lastEvaluatedKey = data.LastEvaluatedKey;

      // Filter for boss entries here
      const newBossEntries = fetchedItems.filter((item) => {
        const detail = JSON.parse(item.detail);
        const pathValue = detail.path && detail.path[1];
        return pathValue >= 18 && pathValue <= 78;
      });

      bossEntries = [...bossEntries, ...newBossEntries].slice(0, 10);

      // Stop if we have 10 boss entries or there are no more items to fetch
    } while (bossEntries.length < 10 && lastEvaluatedKey);
  } catch (err) {
    console.error("Error fetching adventure logs: ", err);
    throw err;
  }

  return bossEntries;
};

export const fetchAdventureLogClue = async (playerId) => {
  console.log(playerId, "playerId LOG FROM CLUE SCROLL BULLSHIT");
  if (!playerId) {
    // You can choose to throw an error or return an error message
    // Throwing an error:
    throw new Error("playerId is required but was not provided.");

    // Or returning an error object/message (if you prefer not to throw an error):
    // return { error: "playerId is required but was not provided." };
  }

  let fetchedItems = [];
  let lastEvaluatedKey = null;
  let clueScrollEntries = [];

  try {
    do {
      const params = {
        TableName: "AdventureLogEntries",
        KeyConditionExpression: "playerId = :playerId",
        ExpressionAttributeValues: { ":playerId": playerId },
        ScanIndexForward: false,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const data = await docClient.query(params).promise();
      fetchedItems = data.Items;
      lastEvaluatedKey = data.LastEvaluatedKey;

      const newClueScrollEntries = fetchedItems.filter((item) => {
        const detail = JSON.parse(item.detail);
        const pathValue = detail.path && detail.path[1];
        return pathValue >= 6 && pathValue <= 12;
      });

      clueScrollEntries = [...clueScrollEntries, ...newClueScrollEntries].slice(
        0,
        10
      );
    } while (clueScrollEntries.length < 10 && lastEvaluatedKey);
  } catch (err) {
    console.error("Error fetching clue scroll logs: ", err);
    throw err;
  }

  return clueScrollEntries;
};

export const fetchAdventureLogMinigame = async (playerId) => {
  let fetchedItems = [];
  let lastEvaluatedKey = null;
  let minigameEntries = [];

  try {
    do {
      const params = {
        TableName: "AdventureLogEntries",
        KeyConditionExpression: "playerId = :playerId",
        ExpressionAttributeValues: { ":playerId": playerId },
        ScanIndexForward: false,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const data = await docClient.query(params).promise();
      fetchedItems = data.Items || []; // Ensure fetchedItems is always an array
      lastEvaluatedKey = data.LastEvaluatedKey;

      const newMinigameEntries = fetchedItems.filter((item) => {
        if (!item.detail) return false; // Skip if detail is not present
        const detail = JSON.parse(item.detail);
        const pathValue = detail.path && detail.path[1];
        return (
          (pathValue >= 0 && pathValue <= 5) ||
          (pathValue >= 13 && pathValue <= 17)
        );
      });

      minigameEntries = [...minigameEntries, ...newMinigameEntries].slice(
        0,
        10
      );
    } while (minigameEntries.length < 10 && lastEvaluatedKey);
  } catch (err) {
    console.error("Error fetching minigame logs: ", err);
    // It's better to handle errors with response sending in a route handler context
    // Replace 'throw err;' with a response send in the route handler function
    throw err;
  }
  return minigameEntries;
};

export const fetchAdventureLogSkill = async (playerId) => {
  let fetchedItems = [];
  let lastEvaluatedKey = null;
  let skillLevelChanges = [];

  try {
    do {
      const params = {
        TableName: "AdventureLogEntries",
        KeyConditionExpression: "playerId = :playerId",
        ExpressionAttributeValues: { ":playerId": playerId },
        ScanIndexForward: false,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const data = await docClient.query(params).promise();
      fetchedItems = data.Items;
      lastEvaluatedKey = data.LastEvaluatedKey;

      // Filter for skill level change entries
      const newSkillEntries = fetchedItems.filter((item) => {
        const detail = JSON.parse(item.detail);
        // Define your condition here based on 'detail' structure for skill level changes
        return /* your condition for skill level change */;
      });

      skillLevelChanges = [...skillLevelChanges, ...newSkillEntries];

      // Optionally limit the number of entries if needed
    } while (skillLevelChanges.length < desiredCount && lastEvaluatedKey);
  } catch (err) {
    console.error("Error fetching adventure logs: ", err);
    throw err;
  }

  return skillLevelChanges;
};

export const fetchAdventurePlayerData = async (playerId) => {
  const params = {
    TableName: "AdventureLog",
    KeyConditionExpression: "playerId = :playerId",
    ExpressionAttributeValues: {
      ":playerId": playerId,
    },
  };

  try {
    const data = await docClient.query(params).promise();
    return data.Items[0];
  } catch (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    throw new Error("Error fetching player data");
  }
};

export const updateAdventureLog = async (rsn) => {
  const playerId = rsn;
  const currentData = await fetchAdventurePlayerData(playerId);

  const deleteParams = {
    TableName: "AdventureLog",
    Key: {
      playerId: playerId,
      logTimeStamp: currentData.logTimeStamp,
    },
  };

  try {
    await docClient.delete(deleteParams).promise();
    console.log(`Old data deleted successfully for player: ${rsn}`);

    await insertPlayerData(rsn);
  } catch (error) {
    console.error(`Error updating AdventureLog for player ${rsn}:`, error);
  }
};

// Usage
// fetchPlayerData('Wuglington')
//   .then(playerData => console.log(playerData))
//   .catch(error => console.error(error));
