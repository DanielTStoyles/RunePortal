/** @format */
// This is called a "model conceptually or "object" as it is in javascript functionally

import connection from "../database.js";

export const User = {
  async getUserById(id) {
    const [rows] = await connection.query(
      "SELECT username FROM users WHERE id = ?",
      [id]
    );
    return rows;
  },
};
