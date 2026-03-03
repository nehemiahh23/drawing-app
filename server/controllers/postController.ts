import type { Request, Response } from "express";
import type { IDrawing } from "../models/types.js";
import Post from "../models/postSchema.js"
import Drawing from "../models/drawingSchema.js"
import "dotenv/config"

export async function getPosts(rq: Request, rs: Response) {
	let data
	
	if (rq.params.id) {
		console.log("individual post")
		data = await Post.find({ _id: rq.params.id })
		if (!data.length) { return rs.status(404).json({ error: "Post does not exist." }) }
	} else if (rq.params.user_id) {
		console.log("user posts")
		data = await Post.find({ userId: rq.params.user_id })
		if (!data.length) { return rs.status(404).json({ error: "No posts attributed to user." }) }
	} else {
		data = await Post.find({})
	}

	rs.json(data)
}

export async function createPost(rq: Request, rs: Response) {
	// check session before allowing creation (cache userId)
	const { drawingId, title } = rq.body

	if (drawingId) {
		// const drawing = await Drawing.find({ _id: drawingId })
		
		const newPost = await Post.create({
			userId: "698b76afafb4035d69232a72",
			drawingId: drawingId,
			title: title, // ? title : drawing.title
			likes: 0
		})

		rs.json(newPost)
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
}

export async function editPost(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to update." }) }

	if (!rq.body.title) { rs.status(400).json({ error: "Insufficient data to update resource." }) }
	else {
		let target = await Post.findByIdAndUpdate(rq.params.id, { title: rq.body.title })
		target = await Post.findById(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested post not found." }) }
		else { rs.json(target) }
	}
}

export async function deletePost(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	else {
		const target = await Post.findByIdAndDelete(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested post not found." }) }
		else { rs.json(target) }
	}
}