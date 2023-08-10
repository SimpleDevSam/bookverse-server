const {Router} = require("express")
const { GetComments,GetBookComments, PostComment } = require("../controller/comments");
const router = Router()

router.get('/', GetComments)

router.get('/:id', GetBookComments)

router.post("/:id", PostComment)

// router.patch("/:id", patchBook)

// router.delete("/:id", removeBook)

module.exports = router