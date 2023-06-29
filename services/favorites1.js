const FavBooks = require("../models/FavBooks")


async function getAllFavorites() {
     const books = await FavBooks.findAll()
     console.log("checksrvice")
     return books
}

module.exports = getAllFavorites