/** @format */

import { Lambda, InvokeCommand } from "@aws-sdk/client-lambda";

import { fromUtf8 } from "@aws-sdk/util-utf8-node";

const lambda = new Lambda({ region: "us-east-1" });
const decoder = new TextDecoder("utf-8");

export const fetchAdventureLog = async (req, res) => {
  const playerId = req.params.playerId;
  const params = {
    FunctionName: "DynamoDBReadFunction",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({ playerId }),
  };

  try {
    const { Payload } = await lambda.send(new InvokeCommand(params));
    const str = decoder.decode(Payload);
    console.log(str);
    const data = JSON.parse(str);
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("error invoking lambda function");
  }
};

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
