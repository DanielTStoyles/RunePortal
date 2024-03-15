/** @format */

import AWS from "aws-sdk";
import insertPlayerData from "../scripts/insertPlayerItemDynamo.js";

const docClient = new AWS.DynamoDB.DocumentClient();

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

export const fetchAdventureLog = async (playerId) => {
  const params = {
    TableName: "AdventureLogEntries",
    KeyConditionExpression: "playerId = :playerId",
    ExpressionAttributeValues: { ":playerId": playerId },
    ScanIndexForward: false,
    Limit: 3,
  };

  try {
    const data = await docClient.query(params).promise();
    return data.Items;
  } catch (err) {
    throw err;
  }
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
