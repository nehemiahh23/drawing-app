import type { AuthRequest } from "../middleware/authMiddleware.js"
import type { Request, Response } from "express";
import type { JwtPayload } from "jsonwebtoken"
import type { IDrawing } from "../models/types.js";
import Post from "../models/postSchema.js"
import Drawing from "../models/drawingSchema.js"
import "dotenv/config"

export async function getPosts(rq: Request, rs: Response) {
	let data
	
	if (rq.params.id) {
		data = await Post.find({ _id: rq.params.id })
		if (!data.length) { return rs.status(404).json({ error: "Post does not exist." }) }
	} else if (rq.params.user_id) {
		data = await Post.find({ userId: rq.params.user_id })
		if (!data.length) { return rs.status(404).json({ error: "No posts attributed to user." }) }
	} else {
		data = await Post.find({})
	}

	rs.json(data)
}

export async function createPost(rq: AuthRequest, rs: Response) {
	let { drawingId, title } = rq.body
	const drawing: IDrawing = await Drawing.findById(drawingId) as IDrawing
	const payload: JwtPayload = rq.payload as JwtPayload

	// TODO: Implement express-validator to replace all "Insufficient data" statements
	if (!drawingId) { return rs.status(400).json({ error: "Insufficient data to create resource." }) }
	if (!drawing) { return rs.status(404).json({ error: "Requested resource not found." }) }
	if (drawing.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to access resource." }) }
	if (drawing.locked) { return rs.status(403).json({ error: "Drawing already has a corresponding public post." }) }

	if (!title) {
		title = drawing.title
	}
	
	try {
		const newPost = await Post.create({
			userId: payload.user.id,
			drawingId: drawingId,
			title: title,
			likes: 0
		})
	
		drawing.locked = true
		await drawing.save()

		rs.json(newPost)
	} catch(err) {
		console.log(err)
		return rs.status(500).json(err)
	}
}

export async function editPost(rq: AuthRequest, rs: Response) {
	let target = await Post.findById(rq.params.id)
	const payload: JwtPayload = rq.payload as JwtPayload

	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to update." }) }
	if (!rq.body.title) { return rs.status(400).json({ error: "Insufficient data to update resource." }) }
	if (!target) { return rs.status(404).json({ error: "Requested resource not found." }) }
	if (target.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to access resource." }) }
	
	try {
		target.title = rq.body.title
		await target.save()
		rs.json(target)
	} catch(err) {
		return rs.status(500).json(err)
	}
}

export async function deletePost(rq: AuthRequest, rs: Response) {
	// TODO: Delete all associated comments
	const target = await Post.findById(rq.params.id)
	const payload: JwtPayload = rq.payload as JwtPayload

	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	if (!target) { return rs.status(404).json({ error: "Requested resource not found." }) }
	if (target.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to access resource." }) }
	
	try {
		await target.deleteOne()
		await Drawing.findByIdAndUpdate(target.drawingId, { locked: false })
		target.deleteComments()
		rs.json(target)
	} catch(err) {
		return rs.status(500).json(err)
	}
}