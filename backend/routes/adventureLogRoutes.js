/** @format */

// In adventureLogRoutes.js
import express from "express";
import { fetchAdventureLog } from "../controllers/adventureLogController.js";

const router = express.Router();

router.get("/adventure-logs/:playerId", async (req, res) => {
  try {
    const logs = await fetchAdventureLog(req.params.playerId);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
