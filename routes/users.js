const {Router} = require("express")
const {getUsers, getuserById, postUser, patchUser, removeUser } = require("../controller/user.js")
const router = Router()

router.get('/', getUsers)

router.get('/:id', getuserById)

router.post("/", postUser)

router.patch("/:id", patchUser)

router.delete("/:id", removeUser)

module.exports = router