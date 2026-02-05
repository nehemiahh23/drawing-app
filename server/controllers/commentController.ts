import type { Request, Response } from "express"
import type { Comment, Photo } from "../types/types.js"
import comments from "../db/comments.js"
import photos from "../db/photos.js"

export function getPhotoComments(rq: Request, rs: Response) {
	if (rq.query.photo_id) {
		const data: Comment[] = []
		const photo = photos.find(photo => photo.id === Number(rq.query.photo_id)) as Photo

		if (!photo) {
			rs.status(400).json({ error: "Requested resource does not exist." })
			return
		}
		
		const ids = photo.comment_ids as number[]
		
		ids.forEach((id) => {
			const comment: Comment = comments.find(c => c.id === id) as Comment
			data.push(comment)
		})

		rs.json(data)
	} else {
		rs.status(403).json({ error: "Forbidden resource (Must query using photo_id)." })
	}
}

export function deleteComment(rq: Request, rs: Response) {
	const comment: Comment = comments.find((comment, i) => {
		if (comment.id === Number(rq.params.id)) {
			return comments.splice(i, 1)
		}
	}) as Comment
	const photo: Photo = photos.find(photo => photo.id === comment.photoId) as Photo
	
	if (!photo) {
		rs.status(400).json({ error: "Requested resource does not exist." })
		return
	}

	if (comment) {
		photo.comment_ids.find((id, i) => {
			id === comment.id ? photo.comment_ids.splice(i, 1) : null
		})

		rs.json(comment)
	} else {
		rs.status(400).json({ error: "Comment does not exist." })
	}
}

export function createComment(rq: Request, rs: Response) {
	// should check user session before anything
	const content = rq.body.content
	const lastComment: Comment = comments.at(-1) as Comment
	const i: number = lastComment ? lastComment.id + 1 : 1
	const photo: Photo = photos.find(photo => photo.id === Number(rq.params.photo_id)) as Photo
	
	if (!photo) {
		rs.status(400).json({ error: "Photo does not exist." })
		return
	}

	if (content) {
		// TODO: push i to photo comment id array
		const newComment: Comment = {
			id: i,
			content: content,
			photoId: Number(rq.params.photo_id),
			userId: 0 // currently logged in user id
		}

		comments.push(newComment)
		photo.comment_ids.push(i)
		rs.json(newComment)	
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
}