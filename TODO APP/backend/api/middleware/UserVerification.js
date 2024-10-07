import jwt from "jsonwebtoken"
import { UserModel } from "../models/UserModel.js"

const verification = async (req, res, next) => {
    const token = req.cookies.token

    if (token == undefined) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    else {
        let decodeToken = jwt.decode(token)
        let finduser = await UserModel.findById(decodeToken.Userid)
        req.Userid = finduser._id
        next()
    }
}

export default verification