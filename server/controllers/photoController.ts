import type { Request, Response } from "express"
import type { Photo } from "../types/types.js"
import photos from "../db/photos.js"

export function getPhotos(rq: Request, rs: Response) {
	rq.query.id ? rs.json(photos.find(photo => photo.id === Number(rq.query.id))) : rs.json(photos)
}

export function createPhoto(rq: Request, rs: Response) {
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
			author: 0, // currently logged in user id
			comment_ids: []
		}
		photos.push(newPhoto)
		rs.json(photos)	
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
}

export function deletePhoto(rq: Request, rs: Response) {
	const photo: Photo = photos.find((photo, i) => {
		if (photo.id === Number(rq.params.id)) {
			return photos.splice(i, 1)
		}
	}) as Photo

	photo ? rs.json(photo) : rs.status(400).json({ error: "Photo does not exist." })
}