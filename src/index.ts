import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import router from './routes/router';

dotenv.config();

const app = express();

const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    connectDB();
    console.log(`The application is listening on port ${port}!`);
})