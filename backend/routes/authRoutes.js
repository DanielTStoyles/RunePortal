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
router.post("/checkSession", checkSession);

export default router;
