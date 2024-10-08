import mongoose from "mongoose"
import { env } from "../zod";

export const connectDB = async () => {

    try {
        const coon = await mongoose.connect(env.MONGO_URI);
        console.log(`Banco Conectado: ${coon.connection.host}`);
    } 
    catch (error) {
        console.error(`Error ${error}`);
        process.exit(1);
    }
};