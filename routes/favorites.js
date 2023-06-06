const {Router} = require("express")
const { getFavorites, postFavorite, removeFavorite } = require("../controller/favorites.js")
const router = Router()

router.get('/', getFavorites)

router.post("/", postFavorite)

router.delete("/:id", removeFavorite)

module.exports = router