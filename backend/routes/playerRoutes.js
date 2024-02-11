/** @format */
import express from "express";

import { playerDataByName } from "../controllers/playerController.js";

const router = express.Router();

router.get("/playerData/:playerName", playerDataByName);
router.post("/players/update");

export default router;
