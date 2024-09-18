import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        if (process.env.MONGO_URI) {
            const coon = await mongoose.connect(process.env.MONGO_URI);
            console.log(`Banco Conectado: ${coon.connection.host}`);
        }
    } catch (error) {
        console.error(`Error ${error.mensage}`);
        process.exit(1);
    }
};