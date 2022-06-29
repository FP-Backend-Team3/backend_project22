import mongoose from "mongoose";

const UserSignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    }
   
});
const signupModel = mongoose.model("Register", UserSignupSchema);

export default signupModel;