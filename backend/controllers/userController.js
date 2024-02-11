/** @format */

import dbconnection from "../database.js";
import { User } from "../models/userModel.js";
import insertPlayerData from "../scripts/insertPlayerItemDynamo.js";
//implement a selector here to choose an account from the list to set as primary
//seperate endpoint to change player, changes session object rsn to selected player
//will automatically reflect in /user

export const getUserAccList = async (req, res) => {
  const user_id = req.session.user.id;
  try {
    const [rows] = await dbconnection.query(
      "SELECT rsn, account_type FROM players WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database error" });
  }
};

export const playerRegistration = async (req, res) => {
  console.log(req.body, "This is the playerRegistration req.body");

  const user_id = req.session.user.id;
  const { rsn, account_type } = req.body;

  try {
    const [results] = await dbconnection.query(
      "SELECT * FROM players WHERE rsn = ?",
      [rsn]
    );

    console.log(results);

    if (results.length > 0) {
      return res.status(400).json({ message: "rsn already registered" });
    }

    await dbconnection.query(
      "INSERT INTO players (rsn, account_type, user_id) VALUES (?, ?, ?)",
      [rsn, account_type, user_id]
    );

    try {
      await insertPlayerData(rsn);
      console.log("OSRS data inserted into Dynamo successfully");
    } catch (dberror) {
      console.error("Error inserting OSRS data into Dynamo", dberror);
    }
    req.session.user.rsn = rsn;

    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Failed to save session" });
      }
      res.json({ message: "Account Registered" });
    });
  } catch (error) {
    console.error("Error in registration process:", error);
    return res.status(500).json({ message: "Failed to register account" });
  }
};

export const getUsername = async (req, res) => {
  const userId = req.session.user.id;

  try {
    const rows = await User.getUserById(userId);
    if (rows.length > 0) {
      res.json({ username: rows[0].username });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

export const getUserAccountType = async (req, res) => {
  const user_id = req.session.user.id;
  try {
    const [rows] = await dbconnection.query(
      "SELECT account_type FROM players WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database error" });
  }
};

//Think ahout the shape of the session object, cookie and user, req.session.user.rsn. Concern that if you want to show the stats of multiple players on the same page
//have a player selector in the top left where you select the primary player.
//
