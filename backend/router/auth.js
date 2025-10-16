import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../schema/authSchema.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
const router = express.Router();


router.get("/",protectedRoute , async (req, res) => {
    try {
        const respo = await User.find({ email: { $ne: req.email } });
        res.status(200).json(respo);
    } catch (error) {
        console.log(error);
    }
})

router.post("/sign", async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const userExists = await User.findOne({
            email: email
        })
        if(userExists){
            res.status(400).send("user already exists");
        }
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPass
        });
        console.log(user)
        if(!user){
            res.status(400).send("user not created");
        }else{
            const token = jwt.sign({email: user.email}, process.env.SECRET_KEY, {expiresIn: "30d"});
            res.cookie("token", token, {httpOnly: true, sameSite: "none", secure: false, path: "/"});
            res.status(200).send({token: token});
        }
    }catch(err){
        console.log(err);
        res.status(400).send("not sign in");
    }
})

router.post("/login", async (req, res) => {
    const { email, password} = req.body;
    try{
        const user = await User.findOne({
            email: email
        });
        if(user){
            const validPass = await bcrypt.compare(password, user.password);
            if(validPass){
                const token = jwt.sign({email: user.email}, process.env.SECRET_KEY);
                res.cookie("token", token, {httpOnly: true, sameSite: "none", secure: false, path: "/"});
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

router.get("/user", protectedRoute, async (req, res) => {
    try{
        const email = req.email;
        const user = await User.findOne({
            email: email
        });
        res.status(200).send(user);
    }catch(err){
        res.status(400).send("not sign in");
    }
})

router.get("/logout", (req, res) => {
    res.cookie("token", "", {httpOnly: true});
    res.status(200).send("logout");
})

router.use((req, res, next) => {
  console.log('Global req.cookies auth:', req.cookies);
  next();
});


export default router;