/** @format */
import express from "express";

import {
  playerDataByName,
  getProfileAdventureLog,
  getPlayerBossData,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/playerData/:playerName", playerDataByName);
router.get("/getProfileAdventureLog/:playerName", getProfileAdventureLog);
router.get("/getPlayerBossData/:playerName", getPlayerBossData);

export default router;
