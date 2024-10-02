import express from "express";
import dotenv from "dotenv";
import router from "./route/goalRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(connectDB);

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/goals", router);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  return next(error);
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
