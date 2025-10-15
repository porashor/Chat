import express from "express"
import Message from "../schema/MsgSchema.js"
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const respo = 'call daw'
        res.status(200).json(respo);
    } catch (error) {
        console.log(error);
    }
})


router.post("/send", async (req, res) => {
    const {me, person, message} = req.body
    try {
        const sendMsg = await Message.create({
            senderID: me,
            receiverID: person,
            message: message
        })
        res.status(200).json(sendMsg);
    } catch (error) {
        console.log(error);
    }
})


router.post("/getmessage", async (req, res) => {
    const {me, person} = req.body
    console.log(me, person);
    try {
        const getMsg = await Message.find({
      $or: [
        { senderID: me, receiverID: person },
        { senderID: person, receiverID: me }
      ]
    })
        res.status(200).json(getMsg);
    } catch (error) {
        console.log(error);
    }
})


export default router