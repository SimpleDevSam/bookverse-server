const {Router} = require("express")
const { getFavorites, postFavorite, removeFavorite } = require("../controller/favorites.js")
const router = Router()

router.get('/:userId', getFavorites)

router.post("/:id", postFavorite)

router.delete("/:id", removeFavorite)

module.exports = router