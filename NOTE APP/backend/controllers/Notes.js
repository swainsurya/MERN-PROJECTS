import { NotesModel } from "../models/NotesModel.js"

let create = async(req,res) => {
    try {
        const userId = req.userId
        const {title} = req.body
        if(!title) {
            res.status(404).json({
                success : false,
                message : "Title are required"
            })
        }
        const notes = new NotesModel(
            {
                title : title,
                userId : userId
            }
        )
        notes.save()
        .then(result => {
            return res.status(200).json({
                success : true,
                message : "Notes created successfully",
                newNotes : notes
            })
        })
        .catch(error => {
            res.status(404).json({
                success : false,
                message : "Server error"
            })
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            message : "Server error"
        })
    }
}

let update = async(req,res) => {
    try {
        const userId = req.userId
        const noteId = req.params.id

        const {title} = req.body

        const findNote = await NotesModel.findById({_id: noteId})
        if(!findNote) {
            res.status(404).json({
                success : false,
                message : "Note is not found"
            })
        }
        const noteUserId = findNote.userId

        if(noteUserId != userId) {
            res.status(404).json({
                success : false,
                message : "Unathorized User"
            })
        }
        const updatenotes = await NotesModel.findByIdAndUpdate(
            {_id : noteId},
            {title},{new : true}
        )
        res.status(200).json({
            success : true,
            message : "Notes updated successfully",
            updatedNote : updatenotes
        })
    } catch (error) {
        res.status(404).json({
            success : false,
            message : "Internal Server error"
        })
    }
}

let deletenote = async(req,res) => {
    let noteId = req.params.id
    let ownerId = req.userId

    let findnote = await NotesModel.findById({_id : noteId})
    let noteUserId = findnote.userId

    if(ownerId != noteUserId) {
        return res.status(404).json({
            success : false,
            message : "User not found"
        })
    }
    await NotesModel.findByIdAndDelete(
        {_id : noteId},
        {new : true}
    )
    .then(result => {
        return res.status(200).json({
            success : true,
            message : "Note deleted successfully"
        })
    })
    .catch(error => {
        return res.status(404).json({
            success : false,
            message : "Internal server error"
        })
    })
}

let getnotes = async(req,res) => {
    let userId = req.userId
    NotesModel.find({userId})
    .exec()
    .then(result => {
        return res.status(200).json({
            success : true,
            message : "All notes listed",
            allNotes : result
        })
    })
    .catch(error => {
        return res.status(404).json({
            success : false,
            message : "Notes are not found",
            error : error
        })
    })
}

export {create,update,deletenote,getnotes}