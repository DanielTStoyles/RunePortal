/** @format */
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/playerStats/:playerName", async (req, res) => {
  const { playerName } = req.params;

  try {
    const response = await axios.get(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${playerName}`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching player data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
