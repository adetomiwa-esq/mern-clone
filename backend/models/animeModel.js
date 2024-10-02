import mongoose from "mongoose";

const animeSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const animeModel = mongoose.model("anime", animeSchema);

export default animeModel;
