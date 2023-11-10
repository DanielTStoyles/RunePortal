/** @format */

import express from "express";
import {
  login,
  logout,
  register,
  checkSession,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
console.log("Setting up /checkSession route");
router.get("/checkSession", checkSession);

export default router;
