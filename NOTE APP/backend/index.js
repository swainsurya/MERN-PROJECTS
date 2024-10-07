import express from "express"
import dotenv from "dotenv"
import AuthRoutes from "./routes/Auth.js"
import NoteRoutes from "./routes/Notes.js"
import DB from "./utils/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

// DB connection
DB()

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}))

app.use(express.json())
app.use(cookieParser())

app.use("/auth",AuthRoutes)
app.use("/notes",NoteRoutes)

app.get("/",(req,res) => {
    res.status(200).json(
        {
            msg : "server page"
        }
    )
})

app.listen(port,() => {
    console.log("side listening on port "+port);
})