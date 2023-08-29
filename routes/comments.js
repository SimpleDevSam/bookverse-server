const {Router} = require("express")
const { GetComments,GetBookComments, PostComment, DeleteComment, PatchComment } = require("../controller/comments");
const router = Router()

router.get('/', GetComments)

router.get('/:id', GetBookComments)

router.post("/:id", PostComment)

router.patch("/:id", PatchComment)

router.delete("/:id", DeleteComment)

module.exports = router