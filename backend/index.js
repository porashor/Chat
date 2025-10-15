import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import auth from "./router/auth.js";
import message from "./router/message.js";
import http from 'http'
import { Server } from "socket.io";
import Message from "./schema/MsgSchema.js";
dotenv.config();
const app = express();
const Appserver = http.createServer(app);




// socket setup here 
const io = new Server(Appserver, {
  cors: {
    origin: ['http://localhost:5173', 'https://chatherenow.netlify.app', 'https://chat-xuk2.onrender.com'],
    methods: ['GET', 'POST']
  }
});

io.on("connection", (socket) => {
  console.log(`${io.engine.clientsCount} user connected`);
  socket.emit("chatBox", "we can connect successfully");

  // send message
  socket.on("user", async (data)=>{
    const {me, person, message} = data
    try {
      const msg = await Message.create({
      senderID: me,
      receiverID: person,
      message: message
      })
      console.log(msg);
    } catch (error) {
      console.log(error)
    }
  })
  //getmessage
  socket.on("checkuser", async (data)=>{
    const {me, person} = data
    try {
      const msg = await Message.find({
        $or: [
          {senderID: me, receiverID: person},
          {senderID: person, receiverID: me}
        ]
      })
      socket.emit("userhist", msg)
    }catch(error){
      console.log(error)
    }
  })





  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
})



// ---------



// database 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
// --------





// cors options 
const corsOptions = {
  origin: ['http://localhost:5173', 'https://chatherenow.netlify.app', 'https://chat-xuk2.onrender.com'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // allow cookies/auth headers
  allowedHeaders: ['Content-Type', 'Authorization'],
};
// -------


// app use 
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use((req, res, next) => {
  next();
});
app.use("/auth", auth);
app.use("/message", message);
// --------



// method apply
app.get("/", (req, res) => {
    res.send("Hello World");
});



// final listing 

Appserver.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

