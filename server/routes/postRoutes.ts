import express from "express"
import auth from "../middleware/authMiddleware.js"
import * as postController from "../controllers/postController.js"

const router = express.Router()

router.route("/")
.get(postController.getPosts) 
.post(auth, postController.createPost)

router.route("/:id")
.delete(auth, postController.deletePost)
.get(postController.getPosts) // (on FE, only use if there wasn't a clicked post in state)
.put(auth, postController.editPost)

router.route("/user/:user_id")
.get(postController.getPosts)

export default router