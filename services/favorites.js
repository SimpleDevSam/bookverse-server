const fs = require("fs")

function getAllFavorites () {
    return JSON.parse(fs.readFileSync("favbooksdb.json"))
}

function deleteFavoriteById(id) {
    const books = JSON.parse(fs.readFileSync("favbooksdb.json"))
    const filteredBooks = books.filter(book => book.id !==id )
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

function insertFavorite (id) {
    const books = JSON.parse(fs.readFileSync("booksdb.json"))
    const favorites = JSON.parse(fs.readFileSync("favbooksdb.json"))

    const insertedBook = books.find(book =>book.id === id )
    const newFavoritesList = [...favorites, insertedBook]

    fs.writeFileSync("favbooksdb.json", JSON.stringify(newFavoritesList))
}

module.exports = {
    getAllFavorites,
    deleteFavoriteById,
    insertFavorite
}