/** @format */
import dbconnection from "../database.js";

export const item = async (req, res) => {
  const { itemName } = req.body;
  if (!itemName) {
    return res.status(400).json({ message: "Item name is required" });
  }

  try {
    const [results] = await dbconnection.query(
      "SELECT item_id FROM items WHERE item_name = ?",
      [itemName]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    const item = results[0];

    const [highLow, timeSeries] = await Promise.all([
      fetch(
        `https://prices.runescape.wiki/api/v1/osrs/latest?id=${item.item_id}`
      ).then((r) => r.json()),
      fetch(
        `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=24h&id=${item.item_id}`
      ).then((r) => r.json()),
    ]);

    if (!highLow || !timeSeries) {
      console.error("API Response Not OK:", highLow, timeSeries);
      return res.status(500).json({
        message: "API request failed: " + highLow.statusText,
      });
    }

    const response = { highLow, timeSeries }; //call them just highlow and timeseries (makes it more human readable) don't want alot of nesting in your json responses

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};
