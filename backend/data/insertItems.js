/** @format */

const insertItemsIntoDatabase = async (items, connection) => {
  try {
    const query = `
        INSERT INTO items (item_id, item_name, highalch_price, members, examine)
        VALUES (?, ?, ?, ?, ?);
      `;

    for (const item of items) {
      const { id, name, highalch, members, examine } = item;
      console.log(
        `Inserting item: ${id}, ${name}, ${highalch}, ${members}, ${examine}`
      );

      await connection.query(query, [id, name, highalch, members, examine]);
    }

    console.log("Data inserted successfully.");
  } catch (error) {
    console.error("Error inserting data:", error.message);
  }
};

export default insertItemsIntoDatabase;
