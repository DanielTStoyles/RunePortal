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
