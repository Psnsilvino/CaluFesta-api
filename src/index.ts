import { connectDB } from './config/db';
import app from './app';
import { env } from './zod';

const port = env.PORT;

app.listen(port, () => {
    connectDB();
    console.log(`The application is listening on port ${port}!`);
})