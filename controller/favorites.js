const {getAllFavorites,deleteFavoriteById,insertFavorite} = require("../services/favorites1.js")

async function getFavorites(req, res) {
  try {
    const books = await getAllFavorites();
    console.log("Check get favorites controller")
    res.send(books);
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

async function postFavorite(req, res) {
  try {
    const id = req.params.id;
    await insertFavorite(id);
    res.status(200);
    res.send("Book inserted succesfully");
  } catch (Error) {
    if (Error.name === "SequelizeUniqueConstraintError") {
      res.status(409)
      res.send("Book already in favorites")
    } else {
        res.status(500);
        res.send(Error.message);
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
