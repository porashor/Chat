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
        if(!user){
            res.status(400).send("user not created");
        }else{
            const token = jwt.sign({email: user.email}, process.env.SECRET_KEY);
            res.status(200).send({token: token});
        }
    }catch(err){
        res.status(400).send("not sign in");
    }
})
app.post("/login", async (req, res) => {
    const { email, password} = req.body;
    try{
        const user = await User.findOne({
            email: email
        });
        if(user){
            const validPass = await bcrypt.compare(password, user.password);
            if(validPass){
                const token = jwt.sign({email: user.email}, process.env.SECRET_KEY);
                res.status(200).send({token: token});
            }else{
                res.status(400).send("invalid password");
            }
        }else{
            res.status(400).send("user not found");
        }
    }catch(err){
        res.status(400).send("not sign in");
    }
})


export default app;