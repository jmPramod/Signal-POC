import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectMongooseDB = async () => {
  try {
    const dbData = mongoose.connect(process.env.MONGO_CLOUD);
    console.log("MONGO Cloud DB connected 👍!!!");
  } catch (err) {
    console.log("Error in DB😒", err);
  }
};
