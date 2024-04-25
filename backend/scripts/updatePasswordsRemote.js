/** @format */

import bcrypt from "bcrypt";
import remoteDbConnection from "../remoteDatabase.js"; // This ensures you are using the remote database

const saltRounds = 10; // Cost factor for bcrypt

async function hashExistingPasswords() {
  // Fetch all users (consider fetching in batches if the table is very large)
  const [users] = await remoteDbConnection.query(
    'SELECT id, password FROM users WHERE password NOT LIKE "$2b$%"'
  );

  for (let user of users) {
    try {
      if (!user.password.startsWith("$2b$")) {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        await remoteDbConnection.query(
          "UPDATE users SET password = ? WHERE id = ?",
          [hashedPassword, user.id]
        );
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
