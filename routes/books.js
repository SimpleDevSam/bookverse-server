const {Router} = require("express")
const {getBooks} = require("../controller/books.js")
const router = Router()

router.get('/', getBooks)

router.get('/:id', getBooks)

router.patch("/", (req,res) => {
    res.send ("You've done a Patch")
})

router.delete("/", (req,res) => {
    res.send ("You've done a Delete")
})

module.exports = router