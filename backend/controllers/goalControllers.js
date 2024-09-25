// @desc Get goals
// @ POST /api/goals/
export const getGoals = (req, res, next) => {
  res.status(200).json({ msg: "Get all posts" });
};

// @desc Post new goal
// @ POST /api/goals/
export const postGoal = (req, res, next) => {
  res.status(200).json({ msg: "post goal" });
};
