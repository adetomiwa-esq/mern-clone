import express from "express";
import {
  getGoals,
  postGoal,
  getGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";

const router = express.Router();

router.route("/").get(getGoals).post(postGoal);
router.route("/:id").get(getGoal).delete(deleteGoal);

export default router;
