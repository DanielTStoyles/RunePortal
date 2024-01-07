/** @format */

import { OSRS_BASE_URL } from "../controllers/playerController";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const fetch = require("node-fetch");
const lambda = new AWS.Lambda();

const fetchPlayerIds = async () => {
  const params = {
    TableName: "AdventureLog",
  };
  const data = await docClient.scan(params).promise();
  return data.Items.map((item) => item.playerId);
};

const fetchPlayerData = async (playerId) => {
  const url = `${OSRS_BASE_URL}?player=${encodeURIComponent(playerId)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  return await response.json();
};

const invokeWriteLambda = async (playerData) => {
  const params = {
    FunctionName: "DynamoDBReadFunction",
    InvocationType: "Event",
    Payload: JSON.stringify(playerData),
  };

  await lambda.invoke(params).promise();
};
