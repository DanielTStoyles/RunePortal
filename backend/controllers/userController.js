/** @format */

import connection from "../database.js";
import { User } from "../models/userModel.js";
import getRunescapeProfile from "../../src/hooks/getRunescapeProfileSkills.js";

export const getUserAccList = async (req, res) => {
  const user_id = req.session.user.id;
  try {
    const [rows] = await connection.query(
      "SELECT rsn, account_type FROM players WHERE user_id = ?",
      [user_id]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "database error" });
  }
};

export const acctype = async (req, res) => {
  console.log(req.body);

  const user_id = req.session.user.id;
  const { rsn, account_type } = req.body;

  try {
    const [results] = await connection.query(
      "SELECT * FROM players WHERE rsn = ?",
      [rsn]
    );

    console.log(results);

    if (results.length > 0) {
      return res.status(400).json({ message: "rsn already registered" });
    }

    await connection.query(
      "INSERT INTO players (rsn, account_type, user_id) VALUES (?, ?, ?)",
      [rsn, account_type, user_id]
    );

    const playerStats = await getRunescapeProfile(rsn);

    if (playerStats) {
      for (const stat of playerStats) {
        await connection.query(
          "INSERT INTO player_stats (player_id, skill_name, skill_level, skill_xp, last_updated) VALUES (?, ?, ?, ?, NOW())",
          [user_id, stat.skill, stat.level, stat.experience]
        );
      }
    }

    req.session.rsn = rsn;
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
  console.log(req.session);
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
