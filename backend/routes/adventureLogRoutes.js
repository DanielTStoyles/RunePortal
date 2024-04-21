/** @format */

// In adventureLogRoutes.js
import express from "express";
import {
  fetchPlayerAdventureLog,
  fetchPlayerAdventureLogBoss,
  fetchPlayerAdventureLogClue,
  fetchPlayerAdventureLogMinigame,
  fetchPlayerAdventureLogSkill,
} from "../controllers/adventureLogController.js";

const router = express.Router();

router.get("/adventurelogs/:playerId", fetchPlayerAdventureLog);
router.get("/adventurelogsBoss/:playerId", fetchPlayerAdventureLogBoss);
router.get("/adventurelogsClue/:playerId", fetchPlayerAdventureLogClue);
router.get("/adventurelogsMiniGame/:playerId", fetchPlayerAdventureLogMinigame);
router.get("/adventurelogsSkill/:playerId", fetchPlayerAdventureLogSkill);

export default router;
