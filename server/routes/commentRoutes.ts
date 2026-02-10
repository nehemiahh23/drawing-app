import express from "express"
import * as commentController from "../controllers/commentController.js"

const router = express.Router()

router.route("/:id")
.delete(commentController.deleteComment)

router.route("/post/:drawing_id")
.get(commentController.getDrawingComments)
.post(commentController.createComment)

export default router