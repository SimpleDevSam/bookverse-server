const FavBooks = require("../models/FavBooks");
const Books = require("../models/Books");

async function getAllFavorites() {
  const books = await FavBooks.findAll();
  console.log("Passed by Fav service");
  return books;
}

async function deleteFavoriteById(id) {
  await FavBooks.destroy({
    where: {
      id: id
    },
  });
}

async function insertFavorite(id){
      const bookToBeInserted = await Books.findOne({ 
        where: {
        id: id } })
        const Titico = bookToBeInserted.dataValues=

        FavBooks.create(bookToBeInserted)

      console.log(bookToBeInserted)
    
      // const filteredBooks = books.filter(book => book.id === id)
      // console.log(filteredBooks)
      // console.log("Passed by insertFavorite service");
      // console.log("ID:", id);
      // FavBooks.create(filteredBooks)

 }
module.exports = { getAllFavorites, deleteFavoriteById, insertFavorite };
