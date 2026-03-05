import express from "express";
import auth from "../middleware/authMiddleware.js";
import * as commentController from "../controllers/commentController.js";
const router = express.Router();
router.route("/:id")
    .delete(auth, commentController.deleteComment); // check if comment userId matches token
router.route("/post/:post_id")
    .get(commentController.getPostComments)
    .post(auth, commentController.createComment); // set new Comment userId to token
export default router;
//# sourceMappingURL=commentRoutes.js.map