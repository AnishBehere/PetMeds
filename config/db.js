import mongoose from "mongoose";
import colors from "colors";
import { config } from "dotenv";

const connectDB = async (m) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

export default connectDB;
//git add . && git commit -m '<|commit message placeholder|>'
