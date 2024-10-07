import Router from "express"
import { createTodo, delTodo, listTodo } from "../controllers/Todo.js"
import verification from "../middleware/UserVerification.js"

let todoRouter = Router()

todoRouter.post("/create",verification,createTodo)
todoRouter.delete("/delete/:id",verification,delTodo)
todoRouter.get("/todos",verification,listTodo)

export default todoRouter