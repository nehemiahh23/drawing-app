import express from "express";
import auth from "../middleware/authMiddleware.js";
import * as postController from "../controllers/postController.js";
const router = express.Router();
router.route("/")
    .get(postController.getPosts)
    .post(postController.createPost); // set new Post userId to token
router.route("/:id")
    .delete(postController.deletePost) // check if post userId matches token
    .get(postController.getPosts) // (on FE, only use if there wasn't a clicked post in state)
    .put(postController.editPost); // check if post userId matches token
router.route("/user/:user_id")
    .get(postController.getPosts);
export default router;
//# sourceMappingURL=postRoutes.js.map