/** @format */

import express from "express";
import {
  login,
  logout,
  register,
  checkSession,
  updateRsn,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
console.log("Setting up /checkSession route");
router.get("/checkSession", checkSession);
router.post("/updateRsn", updateRsn);

export default router;
