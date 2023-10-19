import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import bodyParser from 'body-parser';

import authRoute from './routes/authRoute.js';

const app = express();

app.use(bodyParser.json());

app.use(cors(
    // {
    //     origin: 'http://localhost:5173/',
    //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //     allowedHeaders: ['Contetnt-type'],
    // }
));

app.use('/auth', authRoute);

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("App connected to database");
    
    app.listen(PORT, () => {
        console.log(`App listening to port: ${PORT}`);
    });    
    
}).catch((err) => {
    console.log(err);
})