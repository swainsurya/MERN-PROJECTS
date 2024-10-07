import {TodoModel} from "../models/TodoModel.js"

let createTodo = (req,res) => {
    let userid = req.Userid
    let {title , isCompleted} = req.body

    let newTodo = new TodoModel(
        {
            title,
            isCompleted,
            userid
        }
    )
    newTodo.save()
    .then(result => {
        return res.status(200).json({
            success : true ,
            message : "Todo created successfully",
            todo : result
        })
    })
    .catch(error => {
        return res.status(404).json({
            success : false,
            message : "Internal server error",
            error : error
        })
    })
}

let delTodo = async(req,res) => {
    let itemId = req.params.id
    let userId = req.Userid
    let findUser = await TodoModel.findById({_id : itemId})
    if(findUser.userid != userId) {
        return res.status(404).json(
            {
                success : false ,
                message : "Unauthorized User"
            }
        )
    }
    else {
        TodoModel.findOneAndDelete({_id : itemId})
        .then(result => {
            return res.status(200).json(
                {
                    success : true,
                    message : "Todo deleted successfully"
                }
            )
        })
        .catch(error => {
            return res.status(404).json(
                {
                    success : false,
                    message : "Internal server error",
                    err : error
                }
            )
        })
    }
}

let listTodo = async(req,res) => {
    let userid = req.Userid 
    if(userid == null) {
        return res.status(404).json(
            {
                success : false,
                message : "User not Found"
            }
        )
    }
    TodoModel.find({userid})
    .then(result => {
        return res.status(200).json(
            {
                success : true,
                message : "All todos are",
                todos : result
            }
        )
    })
    .catch(error => {
        return res.status(404).json(
            {
                success : false,
                message : "Internal server error",
                err : error
            }
        )
    })
}
export {createTodo , delTodo, listTodo}