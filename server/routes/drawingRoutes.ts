import express from "express"
import multer from "multer"
import * as drawingController from "../controllers/drawingController.js"

const router = express.Router()
const upload = multer({ dest: "./uploads/" })

router.route("/")
.get(drawingController.getDrawings)
.post(upload.single('drawing'), drawingController.createDrawing)

router.route("/:id")
.get(drawingController.getDrawings)
.delete(drawingController.deleteDrawing)

export default router