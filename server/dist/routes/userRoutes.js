import express from "express";
import auth from "../middleware/authMiddleware.js";
import { check } from "express-validator";
import * as userController from "../controllers/userController.js";
import * as authController from "../controllers/authController.js";
const router = express.Router();
router.route("/")
    .post([
    check("email")
        .isEmail().withMessage("Please input a valid e-mail address."),
    check("username")
        .notEmpty().withMessage("Username required."),
    check("password")
        .matches(/^.\S{8,}$/).withMessage("Password must be at least 8 characters long.")
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(){}[\]<>?/|.:;_-]).*$/).withMessage("Password must contain at least one number and one special character")
], authController.register);
router.route("/:id")
    .get(userController.getUsers) // response should have extra info added on if auth
    .put(auth, userController.editUser)
    .delete(auth, userController.deleteUser);
router.route("/user/settings")
    .get(auth, userController.getSelf);
router.route("/user/drawings")
    .get(auth, userController.getDrawings);
export default router;
//# sourceMappingURL=userRoutes.js.map