import express from "express";
import users from "../db/users.js";
const router = express.Router();
router.route("/")
    .get((_rq, rs) => {
    rs.json(users);
});
export default router;
//# sourceMappingURL=userRoutes.js.map