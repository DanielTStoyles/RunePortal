/** @format */

import dotenv from "dotenv";
import mysql from "mysql2/promise";
import session from "express-session";
import makeMySQLSessionStore from "express-mysql-session";
import express from "express";
import itemParse from "./data/itemParse.js";
import insertItemsIntoDatabase from "./data/insertItems.js";

dotenv.config();

const url = process.env.MYSQL_URL;
console.log("MYSQL_URL:", process.env.MYSQL_URL);
const connection = mysql.createPool(url);
const MySQLStore = makeMySQLSessionStore(session);
const sessionStore = new MySQLStore({}, connection);

const app = express();

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // setupData();
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

const ensureLoggedIn = (req, res, next) => {
  console.log("Session data:", req.session);
  if (!req.session.user.id) {
    return res.status(401).json({ message: "User isn't logged in" });
  }
  next();
};

const setupData = async () => {
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

app.post("/login", async (req, res) => {
  console.log("POST recieved");
  const { email, password } = req.body;

  const [results] = await connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (results.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }

  const user = results[0];

  if (user.password !== password) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  req.session.user = user;

  res.json({ message: "Logged in" });
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  const [results] = await connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  console.log(results);

  if (results.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }

  await connection.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, password, email]
  );

  const user = { username, email };

  req.session.user = user;

  res.json({ message: "Registered" });
});

app.post("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Internal error during logout" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

app.get("/getUsername", ensureLoggedIn, async (req, res) => {
  console.log(req.session);
  const userId = req.session.user.id;

  try {
    const [rows] = await connection.query(
      "SELECT username FROM users WHERE id = ?",
      [userId]
    );
    if (rows.length > 0) {
      res.json({ username: rows[0].username });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
});

app.post("/todo", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { title, body } = req.body;

  await connection.query(
    "INSERT INTO todo (title, body, user_id) VALUES (?, ?, ?)",
    [title, body, req.session.user.id]
  );

  res.json({ message: "Created todo" });
});

app.get("/checkSession", (req, res) => {
  res.json(req.session.user || null);
});

app.post("/item", async (req, res) => {
  const { itemName } = req.body;
  if (!itemName) {
    return res.status(400).json({ message: "Item name is required" });
  }

  try {
    const [results] = await connection.query(
      "SELECT item_id FROM items WHERE item_name = ?",
      [itemName]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    const item = results[0];

    const highLow = await fetch(
      `https://prices.runescape.wiki/api/v1/osrs/latest?id=${item.item_id}`
    );

    const timeSeries = await fetch(
      `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=24h&id=${item.item_id}`
    );

    if (!highLow.ok || !timeSeries.ok) {
      console.error("API Response Not OK:", highLow, timeSeries);
      return res.status(500).json({
        message: "API request failed: " + highLow.statusText,
      });
    }

    const highLowData = await highLow.json();
    const timeSeriesData = await timeSeries.json();

    const response = { highLowData, timeSeriesData }; //call them just highlow and timeseries (makes it more human readable) don't want alot of nesting in your json responses

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
});
