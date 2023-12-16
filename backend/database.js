/** @format */

import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MYSQL_URL;
console.log("MYSQL_URL:", url);
const dbconnection = mysql.createPool(url);

export default dbconnection;
