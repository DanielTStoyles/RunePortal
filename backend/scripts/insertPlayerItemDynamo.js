/** @format */

import AWS from "aws-sdk";
import getPlayerData from "../util/getPlayerData.js";

AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "AdventureLog";

const insertPlayerData = async (rsn) => {
  try {
    const playerData = await getPlayerData(rsn);
    if (!playerData) {
      throw new Error("Failed to parse player profile");
    }
    const timestamp = new Date().toISOString(); // ISO 8601 format
    const item = {
      ...playerData,
      logTimeStamp: timestamp,
    };

    const params = {
      TableName: tableName,
      Item: item,
    };

    await docClient.put(params).promise();
    console.log(`Data inserted successfully for player: ${rsn}`);
  } catch (error) {
    console.error(`Error inserting data for player ${rsn}:`, error);
  }
};

export default insertPlayerData;
