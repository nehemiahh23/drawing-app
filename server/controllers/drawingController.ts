import type { AuthRequest } from "../middleware/authMiddleware.js"
import type { Request, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import type { IDrawing } from "../models/types.js"
import Drawing from "../models/drawingSchema.js"
import Post from "../models/postSchema.js"
import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
import "dotenv/config"

export async function getDrawings(rq: Request, rs: Response) {
	let data 

	if (rq.params.id) {
		data = await Drawing.find({ _id: rq.params.id })
		if (!data.length) { return rs.status(404).json({ error: "Drawing does not exist." }) }
	} else if (rq.params.user_id) {
		data = await Drawing.find({ userId: rq.params.user_id })
		if (!data.length) { return rs.status(404).json({ error: "No posts attributed to user." }) }
	} else {
		data = await Drawing.find({})
	}

	rs.json(data)
}

export async function createDrawing(rq: AuthRequest, rs: Response) {
	if (!rq.file) { return rs.status(400).json({ error: "Insufficient data to create resource." }) }
	
	const payload: JwtPayload = rq.payload as JwtPayload
	
	const type = rq.file.mimetype
	if (type.slice(0, 6) !== "image/") { return rs.status(400).json({ error: "Invalid file type." }) }
	
	let newDrawing
	let uploadRes
	
	try {
		newDrawing = await Drawing.create({
			...rq.body,
			src: "https://res.cloudinary.com/ddka2pw9a/image/upload/v1772767575/2153483_e8wtpj.jpg",
			userId: payload.user.id,
			locked: false
		})
	} catch(err) {
		fs.unlink(`./${rq.file.path}`, err => err && console.log(err))
		return rs.status(500).json(err)
	}
	
	try {
		uploadRes = await cloudinary.uploader.upload(rq.file.path, { public_id: String(newDrawing._id), display_name: newDrawing.title })
		if (!uploadRes.url) { throw new Error("Cloud upload failed.") }
		newDrawing.src = uploadRes.url
		await newDrawing.save()
		
		fs.unlink(`./${rq.file.path}`, err => err && console.log(err))
		rs.json(newDrawing)
	} catch(err) {
		await newDrawing.deleteOne()
		return rs.status(500).json(err)
	}
}

export async function editDrawing(rq: AuthRequest, rs: Response) {
	const target: IDrawing = await Drawing.findById(rq.params.id) as IDrawing
	const payload: JwtPayload = rq.payload as JwtPayload
	let uploadRes
	
	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to update." }) }
	if (!rq.file || !rq.body.title) { return rs.status(400).json({ error: "Insufficient data to update resource." }) }
	if (!target) { return rs.status(404).json({ error: "Requested resource not found." }) }
	if (target.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to update resource." }) }
	if (target.locked) { return rs.status(403).json({ error: "Drawing has a corresponding public post and cannot be changed." }) }

	try {
		target.title = rq.body.title ? rq.body.title : target.title
		uploadRes = await cloudinary.uploader.upload(rq.file.path, { public_id: String(target._id), overwrite: true, invalidate: true, display_name: target.title })
		target.src = uploadRes.url
		await target.save()
		rs.json(target)
	} catch(err) {
		if (rq.file) { fs.unlink(`./${rq.file.path}`, err => err && console.log(err)) }
		return rs.status(500).json(err)
	}
}

export async function deleteDrawing(rq: AuthRequest, rs: Response) {
	const payload: JwtPayload = rq.payload as JwtPayload

	if (rq.body) {
		const invalid = await Drawing.find({ _id: { $in: rq.body.ids }, userId: { $ne: payload.user.id } })
		if (invalid.length) { return rs.status(401).json({ error: "Not authorized to delete resource." }) }

		const deleted = await Drawing.deleteMany({ _id: { $in: rq.body.ids } })
		return rs.json(deleted)
	} 

	const target = await Drawing.findById(rq.params.id)

	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	if (!target) { return rs.status(404).json({ error: "Requested resource not found." }) }
	if (target.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to delete resource." }) }
	
	try {
		await target.deletePost()
		await target.deleteOne()
		cloudinary.uploader.destroy(String(target._id))


		rs.json(target)
	} catch(err) {
		return rs.status(500).json({ error: err })
	}
}