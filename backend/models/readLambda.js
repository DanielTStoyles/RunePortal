/** @format */

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const dynamoDBClient = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(dynamoDBClient);

//handler function

export const handler = async (event) => {
  const playerId = event.playerId;
  console.log(playerId);
  try {
    const params = {
      TableName: "AdventureLogEntries",
      KeyConditionExpression: "#pid = :playerIdValue",
      ExpressionAttributeNames: {
        "#pid": "playerId",
      },
      ExpressionAttributeValues: {
        ":playerIdValue": playerId,
      },
    };

    // Query based on params
    const data = await docClient.send(new QueryCommand(params));
    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };

    //error handlin
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error querying AdventureLogEntries" }),
    };
  }
};
