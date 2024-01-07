/** @format */
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const updatePlayerData = async (playerId, playerData) => {
  const params = {
    TableName: "AdventureLog",
    Key: { playerId: playerId },
    UpdateExpression: "set level = :level, experience = :exp",
    ExpressionAttributeValues: {
      ":level": playerData.level,
      ":exp": playerData.experience,
      ":rank": playerData.rank,
    },
  };
  await docClient.update(params).promise();
};

export default updatePlayerData;
