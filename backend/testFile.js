/** @format */

import dotenv from "dotenv";
import mysql from "mysql2/promise";
import itemParse from "./data/itemParse.js";
import insertItemsIntoDatabase from "./data/insertItems.js";

dotenv.config();

const SetupData = async () => {
  const url = process.env.MYSQL_URL;
  const connection = mysql.createPool(url);
  try {
    const itemsFilePath = "./items.json";
    const items = await itemParse(itemsFilePath);
    await insertItemsIntoDatabase(items, connection);

    console.log("Data setup completed.");
  } catch (error) {
    console.error("Error setting up data:", error.message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};
SetupData();

export default SetupData;
