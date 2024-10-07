import express from "express"
import dotenv from "dotenv"
import { Authrouter } from "./api/input.js"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import todoRouter from "./api/routes/TodoRoutes.js"
dotenv.config()

let app = express()
let port = process.env.PORT


// DB connection
mongoose.connect(process.env.DB_URL)
.then(() => {console.log("DB Connection Success")})
.catch(() => {console.log("DB Connection Error")})

app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        credentials : true,
        origin : "http://localhost:5173"
    }
))
app.use("/auth",Authrouter)
app.use("/todo",todoRouter)

app.get("/",(req,res) => {
    res.send("Hello server")
})

app.listen(port,() => console.log("port ",port))