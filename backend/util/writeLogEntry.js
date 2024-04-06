/** @format */

import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();

const writeLogEntry = async (playerId, difference) => {
  const isScoreChange = difference.path[2] === "score";
  const isSkillLevelChange = difference.path[1] == "level";

  if (!isScoreChange && !isSkillLevelChange) return;

  const entry = {
    playerId: playerId,
    timeStamp: new Date().toISOString(),
    detail: JSON.stringify(difference),
  };

  const params = {
    TableName: "AdventureLogEntries",
    Item: entry,
  };

  try {
    await docClient.put(params).promise();
    console.log(`Log entry for ${playerId} written successfully.`);
  } catch (err) {
    console.error("Error writing log entry:", err);
  }
};

export default writeLogEntry;
