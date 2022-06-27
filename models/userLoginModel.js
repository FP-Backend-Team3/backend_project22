import mongoose from "mongoose";


const UserLoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

}});

    const UserLogin = mongoose.model("User",  UserLoginSchema);
    export default UserLogin;