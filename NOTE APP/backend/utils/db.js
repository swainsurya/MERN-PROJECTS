import mongoose from "mongoose";

let DB = async() => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("MongoDB conn success");
    } catch (error) {
        console.log("MongoDB conn error",error);
    }
}

export default DB