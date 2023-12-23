/** @format */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Example player data structure; structure this according to your actual data model
  const playerData = event.players.map((player) => {
    return {
      PutRequest: {
        Item: {
          playerId: player.id, // Assuming each player has an ID
          // Other player attributes...
        },
      },
    };
  });

  const params = {
    RequestItems: {
      YourDynamoDBTableName: playerData, // Replace with your table name
    },
  };

  try {
    await docClient.batchWrite(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Players data updated successfully" }),
    };
  } catch (err) {
    console.error("Error writing to DynamoDB", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error writing to DynamoDB" }),
    };
  }
};
