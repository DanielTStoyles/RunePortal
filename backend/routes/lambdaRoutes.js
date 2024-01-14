/** @format */

import express from "express";
import { fetchAdventureLog } from "../controllers/lambdaContoller.js";

const router = express.Router();

router.get("/fetchAdventureLog/:playerId", fetchAdventureLog);

export default router;
