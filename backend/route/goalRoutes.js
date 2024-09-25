import express from "express";
import { getGoals, postGoal } from "../controllers/goalControllers.js";

const router = express.Router();

router.route("/").get(getGoals).post(postGoal);

export default router;
