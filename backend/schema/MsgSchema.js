import mongoose from "mongoose";


const MsgSchema = new mongoose.Schema({
    senderID: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "me"
    },
    receiverID: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "person"
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })


export default mongoose.model("message", MsgSchema);