import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../schema/authSchema.js";
const app = express.Router();


app.get("/", async (req, res) => {
    res.send("login route");
})

app.post("/sign", async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPass
        });
        res.status(200).send("user created successfully");
    }catch(err){
        res.status(400).send("not sign in");
    }
})


export default app;