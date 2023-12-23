/** @format */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: "AdventureLog",
  };

  try {
    const data = await docClient.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
  } catch (err) {
    console.error("Error reading from DynamoDB", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error reading from DynamoDB" }),
    };
  }
};
