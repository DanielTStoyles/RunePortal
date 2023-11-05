/** @format */

import express from "express";
import { item } from "../controllers/itemsController.js";

const router = express.Router();

router.post("/item", item);

export default router;
