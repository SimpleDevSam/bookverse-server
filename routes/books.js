const {Router} = require("express")
const {getBooks, getBook, postBook, patchBook, removeBook } = require("../controller/books.js")
const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post("/", postBook)

router.patch("/:id", patchBook)

router.delete("/:id", removeBook)

module.exports = router