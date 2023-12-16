/** @format */

import dbconnection from "../database.js";

export const todo = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { title, body } = req.body;

  await dbconnection.query(
    "INSERT INTO todo (title, body, user_id) VALUES (?, ?, ?)",
    [title, body, req.session.user.id]
  );

  res.json({ message: "Created todo" });
};
