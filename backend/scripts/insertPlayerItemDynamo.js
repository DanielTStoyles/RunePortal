/** @format */

import AWS from "aws-sdk";
import getPlayerData from "../util/getPlayerData.js";

AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "AdventureLog";

const insertPlayerData = async (rsn) => {
  try {
    const queryParams = {
      TableName: tableName,
      KeyConditionExpression: "playerId = :rsn",
      ExpressionAttributeValues: {
        ":rsn": rsn,
      },
    };

    const queryResult = await docClient.query(queryParams).promise();

    if (queryResult.Items.length === 0) {
      const playerData = await getPlayerData(rsn);
      if (!playerData) {
        throw new Error("Failed to parse player profile");
      }
      const timestamp = new Date().toISOString(); // ISO 8601 format
      const item = {
        playerId: rsn,
        logTimeStamp: timestamp,
        ...playerData,
      };

      const putParams = {
        TableName: tableName,
        Item: item,
      };

      await docClient.put(putParams).promise();
      console.log(`Data inserted successfully for player: ${rsn}`);
    } else {
      console.log(`Player data for ${rsn} already exists.`);
    }
  } catch (error) {
    console.error(`Error in insertPlayerData for player ${rsn}:`, error);
  }
};

export default insertPlayerData;
