import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    amount: {
        type: Number,
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