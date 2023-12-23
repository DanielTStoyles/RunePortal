import { ApiHandler } from "sst/node/api";


export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
});


// import { DynamoDB } from 'aws-sdk';

// // Your read function logic
// export const handler = async (event: any) => {
//     // DynamoDB read operation
// };
