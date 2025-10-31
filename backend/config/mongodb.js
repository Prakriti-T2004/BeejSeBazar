import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();  // This loads the .env file
const connectDB = async () => {

    try {
        
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/BeejSeBazar`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("connection FAILED ", error);
    process.exit(1);
  }
}
export default connectDB