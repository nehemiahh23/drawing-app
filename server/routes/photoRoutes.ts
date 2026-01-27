import express from "express"
import type { Photo } from "../types/types.js"
import photos from "../db/photos.js"

const router = express.Router()

router.route("/")
.get((_rq, rs) => {
	rs.json(photos)
})

export default router