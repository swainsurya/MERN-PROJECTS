import Router from "express"
import { create, deletenote, getnotes, update } from "../controllers/Notes.js"
import { verification } from "../middleware/verification.js"

let NoteRoutes = Router()

NoteRoutes.post("/createnotes",verification,create)
NoteRoutes.put("/updatenotes/:id",verification,update)
NoteRoutes.delete("/deletenotes/:id",verification,deletenote)
NoteRoutes.get("/getnotes",verification,getnotes)

export default NoteRoutes