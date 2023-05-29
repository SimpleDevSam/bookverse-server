const { getAllBooks, getBookById, insertBook, changeBook } = require("../services/books.js")

function getBooks (req,res)  {
    try{
        const books = getAllBooks
        res.send(books)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }

}

function getBook(req,res)  {
    try{
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }

}

function postBook(req,res) {
    try{
        const newBook = req.body 
        insertBook(newBook)
        res.status(200)
        res.send("Book added succesfully")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req,res) {
    try{
        const id = req.params.id
        const body = req.body
        changeBook(body,id)
        res.status(201)
        res.send("Book modified succesfully")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook
}