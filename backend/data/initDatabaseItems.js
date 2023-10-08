/** @format */

import parseJSONFile from "./itemParse";

const initDatabaseWithItems = async (itemsFilePath, connection) => {
  try {
    const items = await parseJSONFile(itemsFilePath);
    await insertItemsIntoDatabase(items, connection);
  } catch (error) {
    console.error("Error initializing database with items:", error.message);
  }
};

export default initDatabaseWithItems;
