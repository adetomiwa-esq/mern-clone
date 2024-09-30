// @desc Get goals
// @ GET /api/goals/
export const getGoals = (req, res, next) => {
  res.status(200).json({ msg: "Get all posts" });
};

// @desc Get goal
// @ GET /api/goals/:id
export const getGoal = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ msg: `Post with the id: ${id} can not be found` });
};

// @desc Delete goal
// @ DELETE /api/goals/:id
export const deleteGoal = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ msg: `Post with the id: ${id} can not be found` });
};

// @desc Post new goal
// @ POST /api/goals/
export const postGoal = (req, res, next) => {
  res.status(200).json({ msg: "post goal" });
};
