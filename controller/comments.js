const {GetAllComments, InsertComment, GetCommentById, GetCommentsByBook} = require ("../services/comments")

async function GetComments (req,res) {
    try {
        const comments = await GetAllComments()
        console.log("Comments gotten from DB - Controller")
        return comments
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function GetBookComments(req,res) {
    try{
        id = req.params.id
        if (id && Number(id)) {
            const comments = await GetCommentsByBook(id)
            res.send(comments)
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

async function GetComment (req,res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const comment = await GetCommentById(id)
            res.send(comment)
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

async function PostComment (req,res) {
    try {
        const newComment = req.body
        const bookid  = req.params.id
        console.log(bookid)
        newComment.bookid = bookid
        console.log("Comment to be inserted:")
        console.log(newComment)
        if (req.body.content) {
            await InsertComment(newComment)
            res.status(200)
            res.send("Comment added succesfully")
        } else {
            res.status(422)
            res.send("Content field is mandatory")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {GetComments,GetComment,PostComment,GetBookComments}