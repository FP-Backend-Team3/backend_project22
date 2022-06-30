import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    amount: {
        type: Number,
        default:0,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
    }


})

const HistoryModel = mongoose.model("History", historySchema);
export default HistoryModel;