import express from "express";
import dotenv from "dotenv";
import router from "./route/goalRoutes.js";

dotenv.config();

const app = express();

app.use("/api/goals", router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
