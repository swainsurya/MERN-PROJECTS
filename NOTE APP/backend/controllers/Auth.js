import UserModel from "../models/AuthModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

let register = async (req, res) => {
    const { username, email, password } = req.body
    const existingUser = await UserModel.findOne({ email })
    // if input fields are empty 

    if (!username || !email || !password) {
        return res.status(404).json({
            success: false,
            message: "All fields are required"
        })
    }

    // if a user already exits

    if (existingUser) {
        return res.status(303).json(
            {
                success: false,
                message: "User already exit please login"
            }
        )
    }

    // creating new user

    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = new UserModel(
        {
            username, email, password: hashPassword
        }
    )
    newUser.save()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "User Registered Successfully",
                user: result
            })
        })
        .catch(err => {
            res.status(404).json({
                success: false,
                message: "Internal server error",
                error: err
            })
        })
}

let login = async (req, res) => {
    const { email, password } = req.body

    const findUser = await UserModel.findOne({ email })

    if (!findUser) {
        return res.status(404).json({
            success: false,
            message: "User not found please register"
        })
    }
    const comparePassword = await bcrypt.compare(password, findUser.password)
    if (!comparePassword) {
        return res.status(404).json({
            success: false,
            message: "password does not match"
        })
    }
    else if (findUser) {
        let token = await jwt.sign({ userId: findUser._id }, process.env.SECRETE_KEY, { expiresIn: "3d" })

        // store token in cookie
        res.cookie("token",token, {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 3600 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "login successfully",
            user: findUser,
            token: token
        })
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Internal server error"
        })
    }
}

let logout = async (req, res) => {

    let islog = res.clearCookie("token")

    if (islog) {
        res.status(200).json({
            success: true,
            message: "User logout successfully"
        })}
        else {
            res.status(404).json({
                success: false,
                message: "Internal server error",
                error: error
            })
        }
        
}

export { register, login, logout }