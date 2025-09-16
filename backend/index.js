import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
import auth from "./router/auth.js";

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/auth", auth);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

