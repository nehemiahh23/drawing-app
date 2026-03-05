import express from "express";
import multer from "multer";
import auth from "../middleware/authMiddleware.js";
import * as drawingController from "../controllers/drawingController.js";
const router = express.Router();
const upload = multer({ dest: "./public/temp" });
router.route("/")
    .get(drawingController.getDrawings)
    .post(auth, upload.single('drawing'), drawingController.createDrawing);
// TODO: Add update route????
router.route("/:id")
    .get(drawingController.getDrawings)
    .delete(auth, drawingController.deleteDrawing);
export default router;
//# sourceMappingURL=drawingRoutes.js.map