import express from 'express';
import cors from 'cors';
import router from './routes/router';
import cookieParser from "cookie-parser"

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  })
);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

export default app;