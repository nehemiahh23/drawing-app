import express from "express"
import * as commentController from "../controllers/commentController.js"

const router = express.Router()

router.route("/")
.get(commentController.getPhotoComments)

router.route("/:id")
.delete(commentController.deleteComment)

router.route("/:photo_id/new")
.post(commentController.createComment)

export default router