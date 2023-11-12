/** @format */
import express from "express";

import {
  getUserAccList,
  acctype,
  getUsername,
} from "../controllers/userController.js";

import ensureLoggedIn from "../middleware/ensureLoggedIn.js";

const router = express.Router();

router.get("/getUserAccList", ensureLoggedIn, getUserAccList);
router.post("/acctype", ensureLoggedIn, acctype);
router.post("/getUsername", ensureLoggedIn, getUsername);

export default router;
