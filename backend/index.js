/** @format */

import dotenv from "dotenv";
import mysql from "mysql2/promise";
import session from "express-session";
import makeMySQLSessionStore from "express-mysql-session";
import express from "express";

dotenv.config();

const url = process.env.MYSQL_URL;
console.log("MYSQL_URL:", process.env.MYSQL_URL);
const connection = mysql.createPool(url);
const MySQLStore = makeMySQLSessionStore(session);
const sessionStore = new MySQLStore({}, connection);

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
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

app.post("/login", async (req, res) => {
  console.log("POST recieved");
  const { email, password } = req.body;

  const [user] = await connection.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  req.session.user = user;

  res.json({ message: "Logged in" });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const [user] = await connection.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  await connection.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );

  req.session.user = user;

  res.json({ message: "Registered" });
});
