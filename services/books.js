
const Books = require("../models/Books")


async function getAllBooks () {
    const books = await Books.findAll();
    console.log("Passed through GetAllbooks service");
    return books;
}

function getBookById (id) {
    const books = JSON.parse(fs.readFileSync("booksdb.json"))
    const filteredBook = books.filter(book => livro.id === id) [0]
    return filteredBook
}

function insertBook (newBook) {
    const books = JSON.parse(fs.readFileSync("booksdb.json"))

    const newBookList = [...books, newBook]

    fs.writeFileSync("booksdb.json", JSON.stringify(newBookList))
}

function changeBook(changes, id) {
    let books = JSON.parse(fs.readFileSync("booksdb.json"))
    const modifiedIndex = books.findIndex(book => book.id === id)
    const modifiedContent = {...books[modifiedIndex],...changes}

    books[modifiedIndex] = modifiedContent

    fs.writeFileSync("booksdb.json", JSON.stringify(books))
}

function deleteBook(id) {
    let books = JSON.parse(fs.readFileSync("booksdb.json"))
    const bookIndex = books.findIndex(book => book.id === id)
    books = books.slice(bookIndex)
    fs.writeFileSync("booksdb.json",JSON.stringify(books))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    changeBook,
    deleteBook
}