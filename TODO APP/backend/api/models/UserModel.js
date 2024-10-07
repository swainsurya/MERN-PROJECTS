import mongoose from "mongoose";

let UserSchema = new mongoose.Schema(
    {
        name : String,
        email : String,
        password : String
    }
)

export let UserModel = mongoose.model("Users",UserSchema)