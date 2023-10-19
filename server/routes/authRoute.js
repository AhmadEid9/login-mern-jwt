import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { User } from '../models/userSchema.js';

const router = express.Router();

const SECRET_KEY = 'super-secret-key';


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
        res.status(500).json({error : error.message});
    }
})

router.get('/register', async (req, res) => {
    try {
        const user = await User.find();
        return res.status(201).json(user);
    } catch(error){
        console.log(error);
        res.status(500).json({message : "Unable to get Users"})
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error : "User Not found!!!"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error : "Invalid Password!!!"})
        }

        try {
            const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' });
            res.status(201).json({ message : "Login Successful" , token});
        } catch (error) {
        res.status(500).json({ error : "Error Signing the token" });
        }
    } catch (error) {
        res.status(500).json({ error : "Error loging In" });
    }

})

export default router;

