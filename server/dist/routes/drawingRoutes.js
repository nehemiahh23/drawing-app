import express from "express";
import multer from "multer";
import auth from "../middleware/authMiddleware.js";
import * as drawingController from "../controllers/drawingController.js";
const router = express.Router();
const upload = multer({ dest: "./public/temp" });
router.route("/")
    .get(drawingController.getDrawings)
    .post(upload.single('drawing'), drawingController.createDrawing); // set new Drawing userId to token 
// TODO: Add update route????
router.route("/:id")
    .get(drawingController.getDrawings)
    .delete(drawingController.deleteDrawing); // check if drawing userId matches token 
export default router;
//# sourceMappingURL=drawingRoutes.js.map