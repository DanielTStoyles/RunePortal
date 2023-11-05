/** @format */

import express from "express";
import { todo } from "../controllers/todoController.js";

const router = express.Router();

router.post("/todo", todo);

export default router;
