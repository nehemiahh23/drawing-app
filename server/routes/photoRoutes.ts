import express from "express"
import type { Photo } from "../types/types.js"
import photos from "../db/photos.js"

const router = express.Router()

router.route("/")
.get((rq, rs) => {
	rq.query.id ? rs.json(photos.find(photo => photo.id === Number(rq.query.id))) : rs.json(photos)
})
.post((rq, rs) => {
	// should check user session before anything
	const { src, alt } = rq.body
	const lastPhoto: Photo = photos.at(-1) as Photo
	const i: number = lastPhoto ? lastPhoto.id + 1 : 1
	
	if (src && alt) {
		const newPhoto: Photo = {
			id: i,
			src: src,
			url: src,
			alt: alt,
			author: 0 // currently logged in user id
		}
		photos.push(newPhoto)
		rs.json(photos)	
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
})

router.route("/:id")
.delete((rq, rs) => {
	const photo: Photo = photos.find((photo, i) => {
		if (photo.id === Number(rq.params.id)) {
			return photos.splice(i, 1)
		}
	}) as Photo

	photo ? rs.json(photo) : rs.status(400).json({ error: "Photo does not exist." })
})

export default router