/** @format */
import express from "express";

import {
  playerStatsByName,
  getProfileAdventureLog,
  getPlayerBossData,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/playerStats/:playerName", playerStatsByName);
router.get("/getProfileAdventureLog/:playerName", getProfileAdventureLog);
router.get("/getPlayerBossData/:playerName", getPlayerBossData);

export default router;
