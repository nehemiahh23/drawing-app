// import type { Request, Response } from "express"
// import comments from "../db/comments.js"
// import drawings from "../db/drawings.js"

// export function getDrawingComments(rq: Request, rs: Response) {
// 	if (rq.query.drawing_id) {
// 		const data: Comment[] = []
// 		const drawing = drawings.find(drawing => drawing.id === Number(rq.query.drawing_id)) as Drawing

// 		if (!drawing) {
// 			rs.status(400).json({ error: "Requested resource does not exist." })
// 			return
// 		}
		
// 		const ids = drawing.commentIds as number[]
		
// 		ids.forEach((id) => {
// 			const comment: Comment = comments.find(c => c.id === id) as Comment
// 			data.push(comment)
// 		})

// 		rs.json(data)
// 	} else {
// 		rs.status(403).json({ error: "Forbidden resource (Must query using drawing_id)." })
// 	}
// }

// export function deleteComment(rq: Request, rs: Response) {
// 	const comment: Comment = comments.find((comment, i) => {
// 		if (comment.id === Number(rq.params.id)) {
// 			return comments.splice(i, 1)
// 		}
// 	}) as Comment
// 	const drawing: Drawing = drawings.find(drawing => drawing.id === comment.drawingId) as Drawing
	
// 	if (!drawing) {
// 		rs.status(400).json({ error: "Requested resource does not exist." })
// 		return
// 	}

// 	if (comment) {
// 		drawing.commentIds.find((id, i) => {
// 			id === comment.id ? drawing.commentIds.splice(i, 1) : null
// 		})

// 		rs.json(comment)
// 	} else {
// 		rs.status(400).json({ error: "Comment does not exist." })
// 	}
// }

// export function createComment(rq: Request, rs: Response) {
// 	// should check user session before anything
// 	const content = rq.body.content
// 	const lastComment: Comment = comments.at(-1) as Comment
// 	const i: number = lastComment ? lastComment.id + 1 : 1
// 	const drawing: Drawing = drawings.find(drawing => drawing.id === Number(rq.params.drawing_id)) as Drawing
	
// 	if (!drawing) {
// 		rs.status(400).json({ error: "Drawing does not exist." })
// 		return
// 	}

// 	if (content) {
// 		// TODO: push i to drawing comment id array
// 		const newComment: Comment = {
// 			id: i,
// 			content: content,
// 			drawingId: Number(rq.params.drawing_id),
// 			userId: 0 // currently logged in user id
// 		}

// 		comments.push(newComment)
// 		drawing.commentIds.push(i)
// 		rs.json(newComment)	
// 	} else {
// 		rs.status(400).json({ error: "Insufficient data to create resource." })
// 	}
// }