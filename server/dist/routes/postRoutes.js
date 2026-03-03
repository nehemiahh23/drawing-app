import express from "express";
import * as postController from "../controllers/postController.js";
const router = express.Router();
router.route("/")
    .get(postController.getPosts)
    .post(postController.createPost);
router.route("/:id")
    .delete(postController.deletePost)
    .get(postController.getPosts) // (on FE, only use if there wasn't a clicked post in state)
    .put(postController.editPost);
router.route("/user/:user_id")
    .get(postController.getPosts);
export default router;
//# sourceMappingURL=postRoutes.js.map