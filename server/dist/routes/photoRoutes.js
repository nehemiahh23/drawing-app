import express from "express";
import photos from "../db/photos.js";
const router = express.Router();
router.route("/")
    .get((_rq, rs) => {
    rs.json(photos);
})
    .post((rq, rs) => {
})
    .patch((rq, rs) => {
})
    .delete((rq, rs) => {
});
export default router;
//# sourceMappingURL=photoRoutes.js.map