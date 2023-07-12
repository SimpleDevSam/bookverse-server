const { getAllBooks, getBookById, insertBook, changeBook, deleteBook } = require("../services/books.js")

async function getBooks (req,res)  {
    try{
        const books = await getAllBooks()
        console.log("passed by getBooks controller")
        res.send(books)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }

}

async function getBook(req,res)  {
    try{
        const id = req.params.id

        if (id && Number(id)) {
            const book = await getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Invalid ID")
        }  
    } catch (error){
        res.status(500)
        res.send(error.message)
    }

}

async function postBook(req,res) {
    try{
        const newBook = req.body 
        console.log(newBook)
        if (req.body.name) {
            await insertBook(newBook)
            res.status(200)
            res.send("Book added succesfully")
        } else {
            res.status(422)
            res.send("Name field is mandatory")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

async function patchBook(req,res) {
    try{
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            await changeBook(body,id)
            res.status(201)
            res.send("Book modified succesfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function removeBook(req,res) {
    try{
        const id = req.params.id
        if (id && Number(id)) {
            deleteBook(id)
            res.status(201)
            res.send("Book deleted succesfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    removeBook
}