import mongoose from "mongoose";


const historySchema = new mongoose.Schema({
    amount: {
        type: Number,
        default:0
    },
    description: {
        type: String,
        required: true
    },
   


})

const HistoryModel = mongoose.model("History", historySchema);
export default HistoryModel;