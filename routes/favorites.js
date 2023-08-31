const {Router} = require("express")
const { getFavorites, postFavorite, removeFavorite,getTheFavorites } = require("../controller/favorites.js")
const router = Router()

router.get('/:userId', getFavorites)

router.get('/', getTheFavorites)

router.post("/:id", postFavorite)

router.delete("/:id", removeFavorite)

module.exports = router