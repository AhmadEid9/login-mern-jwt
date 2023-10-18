import express from 'express';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models/userSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
    
})

router.post('/register', async (req, res) => {
    try{
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).send({
                message: "Required Fields Missing!!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User( {
            email,
            username,
            password : hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({ message : "User created Successfully!!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
})

export default router;

