import mongoose from "mongoose"

const NotesSchema = new mongoose.Schema(
    {
        title : {type : String},
        userId : {type : String}
    },{timestamps : true}
)

export let NotesModel = mongoose.model("notes",NotesSchema)