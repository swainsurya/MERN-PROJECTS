import jwt from "jsonwebtoken"
import UserModel from "../models/AuthModel.js";

const verification = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.decode(token,process.env.SECRETE_KEY)
        const user = await UserModel.findById(decoded.userId)
        console.log(user);
        if(!user) {
            return res.status(404).json({
                success : false,
                message : "User not found"
            })
        }
        req.userId = user._id
        next()
    } catch (error) {
        
    }
}

export {verification}