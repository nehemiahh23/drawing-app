import express from "express";
import comments from "../db/comments.js";
const router = express.Router();
router.route("/")
    .get((_rq, rs) => {
    rs.json(comments);
})
    .post((rq, rs) => {
})
    .patch((rq, rs) => {
})
    .delete((rq, rs) => {
});
export default router;
//# sourceMappingURL=commentRoutes.js.map