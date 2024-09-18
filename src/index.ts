import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.ts';

dotenv.config();

const app = express();

const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => {
    connectDB();
    console.log(`The application is listening on port ${port}!`);
})

app.get("/", (request, response) => {
    response.status(200).json({
        "Prova": "Enade"
    })
})

