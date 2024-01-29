/** @format */

import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();

export const fetchAdventureLog = async (playerId) => {
  const params = {
    TableName: "AdventureLogEntries",
    KeyConditionExpression: "playerId = :playerId",
    ExpressionAttributeValues: { ":playerId": playerId },
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
    return data.Items;
  } catch (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    throw new Error("Error fetching player data");
  }
};

// Usage
// fetchPlayerData('Wuglington')
//   .then(playerData => console.log(playerData))
//   .catch(error => console.error(error));
