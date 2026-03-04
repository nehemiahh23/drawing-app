import express from "express";
import { check } from "express-validator";
import * as userController from "../controllers/userController.js";
import * as authController from "../controllers/authController.js";
const router = express.Router();
router.route("/")
    // .get(userController.getUser)
    // mw before route
    .post([
    check("email")
        .notEmpty().withMessage("E-mail required.")
        .isEmail().withMessage("Please input a valid e-mail address."),
    check("username")
        .notEmpty().withMessage("Username required."),
    check("password")
        .notEmpty().withMessage("Please input a password at least 8 characters long with at least one number and one special character.")
        .matches(/^.\S{8,}$/).withMessage("Password must be at least 8 characters long.")
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(){}[\]<>?/|.:;_-]).*$/).withMessage("Password must contain at least one number and one special character")
], authController.register);
router.route("/login")
    .post([
    check("username")
        .notEmpty().withMessage("Please input a username."),
    check("password")
        .notEmpty().withMessage("Please input a password.")
], authController.login);
router.route("/:id")
    .put(userController.editUser)
    .delete(userController.deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map