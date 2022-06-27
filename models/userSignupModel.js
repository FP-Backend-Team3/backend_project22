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
    },
    confirmPassword: {
        type: String,
        required: true
    }
});
const SignupModel = mongoose.model("Register", UserSignupSchema);
export default SignupModel;