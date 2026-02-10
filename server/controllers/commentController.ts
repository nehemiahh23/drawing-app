import type { Request, Response } from "express"
import Comment from "../models/commentSchema.js"
import Drawing from "../models/drawingSchema.js"
import type { IDrawing } from "../models/types.js"

export async function deleteComment(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	else {
		const target = await Comment.findByIdAndDelete(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested comment not found." }) }
		else {
			const drawing: IDrawing = await Drawing.findById(target.drawingId) as IDrawing
			const i = drawing.commentIds.indexOf(String(target._id))
			drawing.commentIds.splice(i, 1)
			drawing.save()
			rs.json(target)
		}
	}
}

export async function getDrawingComments(rq: Request, rs: Response) {
	if (rq.params.drawing_id) {
		const drawing = await Drawing.findById(rq.params.drawing_id)
		
		if (drawing) {
			const comments = await drawing.getComments()
			console.log(comments)
			if (comments.length) { rs.json(comments) }
			else { rs.status(404).json({ error: "No comments on requested resource." }) }
		} else {
			rs.status(404).json({ error: "Drawing does not exist." })
		}
	} else {
		rs.status(403).json({ error: "Must query comments using drawing_id." })
	}
}

export async function createComment(rq: Request, rs: Response) {
	if (rq.params.drawing_id) {
		const drawing = await Drawing.findById(rq.params.drawing_id)
		
		if (drawing) {
			const content = rq.body.content
		
			if (content) {
				const newComment = await Comment.create({ ...rq.body, userId: "placeholder0000000000000" })
				drawing.commentIds.push(String(newComment._id))
				drawing.save()
				rs.json(newComment)
			} else { rs.status(400).json({ error: "Insufficient data to create resource." }) }
		} else {
			rs.status(404).json({ error: "Drawing does not exist." })
		}
	} else {
		rs.status(403).json({ error: "Must post comment with drawing_id." })
	}
}