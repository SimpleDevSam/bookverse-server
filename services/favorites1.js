const FavBooks = require("../models/FavBooks");
const Books = require("../models/Books");

async function getAllFavorites() {
  const books = await FavBooks.findAll();
  return books;
}

async function deleteFavoriteById(id) {
  await FavBooks.destroy({
    where: {
      id: id,
    },
  });
}

async function insertFavorite(id) {
  const bookToBeInserted = await Books.findOne({
    where: {
      id: id,
    },
  });
  const dataValues = bookToBeInserted.dataValues;
  await FavBooks.create(dataValues);
}
module.exports = { getAllFavorites, deleteFavoriteById, insertFavorite };
