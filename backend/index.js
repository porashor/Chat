import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
import auth from "./router/auth.js";

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// cors options 
const corsOptions = {
  origin: ['http://localhost:5173', 'https://chatherenow.netlify.app/'], // allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // allow cookies/auth headers
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/auth", auth);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

