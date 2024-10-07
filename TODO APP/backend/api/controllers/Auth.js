import { UserModel } from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

let register = async (req, res) => {
    try {
        let { name, email, password } = req.body

        let existingUser = await UserModel.findOne({ email })


        if (name == "" || email == "" || password == "") {
            return res.status(404).json({
                success: false,
                message: "All fields are required"
            })
        }

        if (existingUser) {
            return res.status(303).json(
                {
                    success: false,
                    message: "User already exits please login"
                }
            )
        }

        let hashPass = bcrypt.hashSync(password, 10)
        let newUser = new UserModel(
            {
                name, email, password: hashPass
            }
        )
        newUser.save()
            .then(result => {
                return res.status(200).json({
                    success: true,
                    message: "Registration Successfull",
                    newUser: result
                })
            })
            .catch(error => {
                return res.status(404).json({
                    success: false,
                    message: "Registration failed"
                })
            })

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Internal server error"
        })
    }
}

let login = async (req, res) => {
    let { email, password } = req.body
    if(password == "") {
        return res.status(404).json(
            {
                success : false,
                message : "Password can not be empty"
            }
        )
    }
    UserModel.findOne({ email })
        .then(async (result) => {
            let comparePass = await bcrypt.compare(password, result.password)

            if (!comparePass) {
                return res.status(404).json({
                    success: false,
                    message: "Password does not match"
                })
            }
            else {
                let token = jwt.sign({ Userid: result._id }, process.env.SECRETE_KEY, { expiresIn: "2d" })
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 2 * 24 * 3600 * 1000
                })
                return res.status(200).json({
                    success: true,
                    message: "User login successfull",
                    newUser: result
                })
            }
        })
        .catch(error => {
            return res.status(404).json({
                success: false,
                message: "Internal server issue",
                error: error
            })
        })
}

let logout = async (req, res) => {
    let isLogin = res.clearCookie("token")

    if (isLogin !== "") {
        return res.status(200).json({
            success: true,
            message: "Logout successfull"
        })
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export { register, login, logout }