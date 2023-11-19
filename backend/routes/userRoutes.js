/** @format */
import express from "express";

import {
  getUserAccList,
  playerRegistration,
  getUsername,
} from "../controllers/userController.js";

import ensureLoggedIn from "../middleware/ensureLoggedIn.js";

const router = express.Router();

router.get("/getUserAccList", ensureLoggedIn, getUserAccList);
router.post("/playerRegistration", ensureLoggedIn, playerRegistration);
router.post("/getUsername", ensureLoggedIn, getUsername);

export default router;
