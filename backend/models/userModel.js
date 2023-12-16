/** @format */
// This is called a "model conceptually or "object" as it is in javascript functionally

import dbconnection from "../database.js";

export const User = {
  async getUserById(id) {
    const [rows] = await dbconnection.query(
      "SELECT username FROM users WHERE id = ?",
      [id]
    );
    return rows;
  },
};
