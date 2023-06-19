const {
  getAllFavorites,
  insertFavorite,
  deleteFavoriteById,
} = require("../services/favorites");

function getFavorites(req, res) {
  try {
    const books = getAllFavorites();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id;
    insertFavorite(id);
    res.status(200);
    res.send("Book inserted succesfully");
  } catch (error) {
    if (error.message === "This book is already in favorites") {
      res.status(409)
      res.send("Book already in favorites")
    } else {
        res.status(500);
        res.send(error.message);
    }

  
  }
}

function removeFavorite(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deleteFavoriteById(id);
      res.status(201);
      res.send("Favorite deleted succesfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = { getFavorites, postFavorite, removeFavorite };
