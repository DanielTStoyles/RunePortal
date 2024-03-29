/** @format */

// In adventureLogRoutes.js
import express from "express";
import {
  fetchPlayerAdventureLog,
  fetchPlayerAdventureLogBoss,
  fetchPlayerAdventureLogClue,
  fetchPlayerAdventureLogMinigame,
} from "../controllers/adventureLogController.js";

const router = express.Router();

router.get("/adventurelogs/:playerId", fetchPlayerAdventureLog);
router.get("/adventurelogsBoss/:playerId", fetchPlayerAdventureLogBoss);
router.get("/adventurelogsClue/:playerId", fetchPlayerAdventureLogClue);
router.get("/adventurelogsMiniGame/:playerId", fetchPlayerAdventureLogMinigame);

export default router;
