import express from "express";
import * as drawingController from "../controllers/drawingController.js";
const router = express.Router();
router.route("/")
    .get(drawingController.getDrawings)
    .post(drawingController.createDrawing);
router.route("/:id")
    .get(drawingController.getDrawings)
    .delete(drawingController.deleteDrawing);
export default router;
//# sourceMappingURL=drawingRoutes.js.map