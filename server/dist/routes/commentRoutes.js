import express from "express";
import comments from "../db/comments.js";
const router = express.Router();
router.route("/")
    .get((_rq, rs) => {
    rs.json(comments);
});
export default router;
//# sourceMappingURL=commentRoutes.js.map