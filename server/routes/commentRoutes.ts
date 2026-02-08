import express from "express"
import * as commentController from "../controllers/commentController.js"

const router = express.Router()

router.route("/")
// .get(commentController.getDrawingComments)

router.route("/:id")
// .delete(commentController.deleteComment)

router.route("/:drawing_id/new")
// .post(commentController.createComment)

export default router