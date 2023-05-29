const {Router} = require("express")
const {getBooks, getBook, postBook, patchBook } = require("../controller/books.js")
const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post("/", postBook)

router.patch("/:id", patchBook)

router.delete("/", deleteBook)

module.exports = router