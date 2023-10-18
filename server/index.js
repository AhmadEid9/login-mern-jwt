import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import body from 'body-parser';
import jwt from 'jsonwebtoken';
import { PORT, mongoDBURL } from "./config.js";




const app = express()


mongoose.connect(mongoDBURL).then(() => {
    console.log("App connected to database");
    
    app.listen(PORT, () => {
        console.log(`App listening to port: ${PORT}`);
    });

    
    
}).catch((err) => {
    console.log(err);
})
