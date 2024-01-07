/** @format */
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const writeAdventureLogs = async (playerId, changes) => {
  for (const change of changes) {
    const logItem = {
      playerId: playerId,
      itemType: "log",
      timestamp: new Date().toISOString(),
      changeDetails: change,
    };
    const params = {
      TableName: "AdventureLogEntries",
      Item: logItem,
    };
    await docClient.put(params).promise();
  }
};

export default writeAdventureLogs;
