/** @format */
import express from "express";

import { playerStatsByName } from "../controllers/playerController.js";

const router = express.Router();

router.get("/playerStats/:playerName", playerStatsByName);

export default router;
