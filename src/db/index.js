import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// read about process.exit(0)

const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected || DB HOST: ${(await connectionInstance).connection.host}`);
    } catch(error) {
        console.log("MONGODB connection error", error);
        throw error;
    }
}

export default connectDB;