const FavBooks = require("../models/FavBooks");
const Books = require("../models/Books");

async function getAllFavorites(userId) {
  let id = userId;
  const books = await FavBooks.findAll({
    where: {
      userid: id,
    },
  });
  return books;
}

async function deleteFavoriteById(id) {
  await FavBooks.destroy({
    where: {
      bookid: id,
    },
  });
}

async function insertFavorite(id, userId) {
  console.log("Received UserId:" + userId);
  const bookToBeInserted = await Books.findOne({
    where: {
      bookid: id,
    },
  });

  const lookFavTable = await FavBooks.findOne({
    where: {
      bookid: id,
      userid: userId,
    },
  });

  if (!lookFavTable) {
    const dataValues = bookToBeInserted.dataValues;
    dataValues.userid = userId;
    await FavBooks.create(dataValues);
    
  } else {
    const error2Fav = new Error("Book is already in your favorites!");
    error2Fav.status = 409;
    error2Fav.message = "Book is already in your favorites!";
    console.log(error2Fav)
    throw error2Fav;
  }
}
module.exports = { getAllFavorites, deleteFavoriteById, insertFavorite };
