import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();
router.route("/")
    // .get(userController.getUser)
    .post(userController.createUser);
router.route("/:id")
    .put(userController.editUser)
    .delete(userController.deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map