import express from 'express';
import cors from 'cors';
import router from './routes/router';
import cookieParser from "cookie-parser"

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // Substitua pela URL do cliente (frontend)
    credentials: true, // Permite envio de cookies
  })
);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())

app.use("/api", router);

export default app;