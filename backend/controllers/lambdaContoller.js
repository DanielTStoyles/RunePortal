/** @format */

import { Lambda } from "@aws-sdk/client-lambda";

const lambda = new Lambda({ region: "us-east-1" });

export const fetchAdventureLog = async (req, res) => {
  const playerId = req.params.playerId;
  const params = {
    FunctionName: "DynamoDBReadFunction",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({ playerId }),
  };

  try {
    const lambdaResponse = await lambda.invoke(params);
    const data = JSON.parse(lambdaResponse.Payload);
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("error invoking lambda function");
  }
};
