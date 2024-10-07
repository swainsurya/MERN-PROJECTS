import mongoose from "mongoose";

let UserSchema = new mongoose.Schema(
    {
        username : {
            type : String
        },
        email : {
            type : String
        },
        password : {
            type : String
        }
    },{timestamps:true}
)

let UserModel = mongoose.model("User",UserSchema)

export default UserModel