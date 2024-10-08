import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodbURI);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
