import mongoose from "mongoose"

let todoSchema = new mongoose.Schema(
    {
        title : String,
        isCompleted : Boolean,
        userid : String
    }
)

export const TodoModel = mongoose.model("Todos",todoSchema);