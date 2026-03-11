import express from "express";
import multer from "multer";
import auth from "../middleware/authMiddleware.js";
import * as drawingController from "../controllers/drawingController.js";
const router = express.Router();
const upload = multer({ dest: "./public/temp" });
router.route("/")
    .get(drawingController.getDrawings)
    .post(auth, upload.single('drawing'), drawingController.createDrawing)
    .delete(auth, drawingController.deleteDrawing);
router.route("/:id")
    .get(drawingController.getDrawings)
    .put(auth, upload.single('drawing'), drawingController.editDrawing)
    .delete(auth, drawingController.deleteDrawing);
router.route("/user/:user_id")
    .get(drawingController.getDrawings);
export default router;
//# sourceMappingURL=drawingRoutes.js.map