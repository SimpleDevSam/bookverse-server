const fs = require("fs")

function getAllBooks () {
    return JSON.parse(fs.readFileSync("booksdb.json"))
}

module.exports = {
    getAllBooks
}