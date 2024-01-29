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
import { fileURLToPath } from "url";
import adventureLogRoutes from "./routes/adventureLogRoutes.js";
import path from "path";
import processPlayerData from "./util/processPlayerData.js";

dotenv.config();

const MySQLStore = makeMySQLSessionStore(session);
const sessionStore = new MySQLStore({}, dbconnection);

const app = express();

app.use(
  session({
    secret: "keyboardcat",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

const api = express.Router();

api.use(authRoutes);
api.use(playerRoutes);
api.use(itemsRoutes);
api.use(userRoutes);
api.use(adventureLogRoutes);
app.use("/api", api);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  processPlayerData("Wuglington").then(() => {
    console.log("Player data processing completed.");
  });
});

// Code for retirieving list of items

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
