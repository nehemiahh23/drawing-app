import express from "express"
import auth from "../middleware/authMiddleware.js"
import * as commentController from "../controllers/commentController.js"

const router = express.Router()

router.route("/:id")
.delete(auth, commentController.deleteComment)

router.route("/post/:post_id")
.get(commentController.getPostComments)
.post(auth, commentController.createComment)

export default router