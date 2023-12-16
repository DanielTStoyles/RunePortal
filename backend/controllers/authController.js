/** @format */

import dbconnection from "../database.js";

export const login = async (req, res) => {
  console.log("POST recieved");
  const { email, password } = req.body;

  const [results] = await dbconnection.query(
    "SELECT users.*, players.rsn FROM users LEFT JOIN players ON users.id = players.user_id WHERE users.email = ?",
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
};

export const register = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  const [results] = await dbconnection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  console.log(results);

  if (results.length > 0) {
    return res.status(400).json({ message: "User already exists" });
  }

  await dbconnection.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, password, email]
  );

  const user = { username, email };

  req.session.user = user;

  res.json({ message: "Registered" });
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Internal error during logout" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
};

export const checkSession = (req, res) => {
  res.json(req.session.user || null);

  if (req.session.user) {
    console.log("Session and User confirmed");
  }
};
