/** @format */

import mysql from "mysql2/promise";
import session from "express-session";
import MySQLStore from "express-mysql-session";
import express from "express";

const url = process.env.MYSQL_URL;
const connection = mysql.createPool(url);
const sessionStore = new MySQLStore({}, connection);

const express = require("express");
const app = express();

app.use(
  session({
    secret: "keyboardcat",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.post("/login", async (req, res) => {
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
