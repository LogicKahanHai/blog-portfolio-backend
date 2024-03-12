import mongoose, { ConnectOptions } from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const clientOptions: ConnectOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export default async function connect() {
    await mongoose.connect(process.env.MONGO_URI as string, clientOptions);
}