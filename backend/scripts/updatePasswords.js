/** @format */

import bcrypt from "bcrypt";
import dbconnection from "../database.js";

const saltRounds = 10; // Cost factor for bcrypt

async function hashExistingPasswords() {
  // Fetch all users (consider fetching in batches if the table is very large)
  // Adjust the query if bcrypt does not use the $2b$ prefix in your hashes.
  const [users] = await dbconnection.query(
    'SELECT id, password FROM users WHERE password NOT LIKE "$2b$%"'
  );

  for (let user of users) {
    try {
      // Check if password already looks hashed to prevent re-hashing
      if (!user.password.startsWith("$2b$")) {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        await dbconnection.query("UPDATE users SET password = ? WHERE id = ?", [
          hashedPassword,
          user.id,
        ]);
        console.log(`Updated password for user ID: ${user.id}`);
      } else {
        console.log(`Password for user ID: ${user.id} already hashed.`);
      }
    } catch (error) {
      console.error(`Failed to hash password for user ID: ${user.id}`, error);
    }
  }
}

hashExistingPasswords()
  .then(() => {
    console.log("Password update process complete.");
  })
  .catch((error) => {
    console.error(
      "An error occurred during the password update process:",
      error
    );
  });
