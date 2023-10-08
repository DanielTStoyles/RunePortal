/** @format */

import fs from "fs/promises";

const itemParse = async (itemsFilePath) => {
  try {
    const data = await fs.readFile(itemsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading or parsing file:", error.message);
  }
};

export default itemParse;
