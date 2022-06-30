import mongoose from "mongoose";

const UserSignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    }
    ,
    email: {
        type: String,
        required: true,
        // stringType: validator.StringType.Email

    },
    password: {
        type: String,
        required: true,
        // minlength: 6
    }
   
});
const signupModel = mongoose.model("Register", UserSignupSchema);

export default signupModel;