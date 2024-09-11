import express from 'express';
import cors from 'cors';

const app = express();

const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})

app.get("/", (request, response) => {
    response.status(200).json({
        "Prova": "Enade"
    })
})