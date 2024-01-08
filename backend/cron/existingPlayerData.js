/** @format */
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const getExistingPlayerData = async (playerId) => {
  const params = {
    TableName: "AdventureLog",
    Key: { playerId: playerId },
  };
  const data = await docClient.get(params).promise();
  return data.Item;
};

export default getExistingPlayerData;
