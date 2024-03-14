/** @format */

// In adventureLogRoutes.js
import express from "express";
import { fetchPlayerAdventureLog } from "../controllers/adventureLogController.js";

const router = express.Router();

router.get("/adventurelogs/:playerId", fetchPlayerAdventureLog);

export default router;
