/** @format */

import dotenv from "dotenv";
import session from "express-session";
import makeMySQLSessionStore from "express-mysql-session";
import express from "express";
import dbconnection from "./database.js";
import authRoutes from "./routes/authRoutes.js";
import itemsRoutes from "./routes/itemsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import lambdaRoutes from "./routes/lambdaRoutes.js";

dotenv.config();

const MySQLStore = makeMySQLSessionStore(session);
const sessionStore = new MySQLStore({}, dbconnection);

const app = express();

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // setupItemData();
});

app.use(express.json());

app.use(
  session({
    secret: "keyboardcat",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

const OSRS_BASE_URL =
  "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws";

const OSRS_GE_BASE_URL = "https://prices.runescape.wiki/api/v1/osrs/mapping";

// const setupItemData = async () => {
//   try {
//     const itemsFilePath = "./items.json";
//     const items = await itemParse(itemsFilePath);
//     await insertItemsIntoDatabase(items, dbconnection);

//     console.log("Data setup completed.");
//   } catch (error) {
//     console.error("Error setting up data:", error.message);
//   } finally {
//     if (dbconnection) {
//       await dbconnection.end();
//     }
//   }
// };

// const setupQuestData=async () =>{

// }

app.use(authRoutes);
app.use(playerRoutes);
app.use(itemsRoutes);
app.use(userRoutes);
app.use(lambdaRoutes);
