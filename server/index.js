import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
console.log("connect mongo", connectDB)

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('Hello world')
})

const startServer = async () => {
    try {
        console.log(process.env.MONGODB_URL);
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('server has started on port http://localhost:8080'))

    } catch (error) {
        console.log(error);

    }
}
startServer();
