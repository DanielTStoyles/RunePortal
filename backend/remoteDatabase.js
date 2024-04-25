/** @format */

// remoteDatabase.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const remoteUrl = process.env.REMOTE_MYSQL_URL;
console.log("REMOTE_MYSQL_URL:", remoteUrl);

const remoteDbConnection = mysql.createPool(remoteUrl);

export default remoteDbConnection;
