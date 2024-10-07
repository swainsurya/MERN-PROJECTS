import { Router } from "express";
import { register , login , logout} from "../controllers/Auth.js";

let Authrouter = Router()

Authrouter.post("/register",register)
Authrouter.post("/login",login)
Authrouter.post("/logout",logout)

export default Authrouter