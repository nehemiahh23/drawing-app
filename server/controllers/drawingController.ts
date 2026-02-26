import type { Request, Response } from "express"
import Drawing from "../models/drawingSchema.js"
import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
import "dotenv/config"

export async function getDrawings(rq: Request, rs: Response) {
	let data 

	if (rq.params.id) {
		data = await Drawing.find({ _id: rq.params.id })
		if (!data.length) { rs.status(404).json({ error: "Drawing does not exist." }) }
		else { rs.json(data) }
	} else {
		data = await Drawing.find({})
		rs.json(data)
	}
}

export async function createDrawing(rq: Request, rs: Response) {
	if (!rq.file) { return rs.status(400).json({ error: "Insufficient data to create resource." }) }

	const type = rq.file.mimetype
	if (type.slice(0, 6) !== "image/") { return rs.status(400).json({ error: "Invalid file type." }) }
	
	let newDrawing
	let uploadRes
	
	try {
		newDrawing = await Drawing.create({
			...rq.body,
			src: "temp",
			userId: "0",
			likes: 0
		})
	} catch(err) {
		fs.unlink(`./${rq.file.path}`, err => err && console.log(err))
		return rs.status(500).json(err)
	}

	try {
		uploadRes = await cloudinary.uploader.upload(rq.file.path)
		if (!uploadRes.url) { throw new Error("Cloudinary upload failed.") }
		newDrawing.src = uploadRes.url
		await newDrawing.save()

		fs.unlink(`./${rq.file.path}`, err => err && console.log(err))
		rs.json(newDrawing)
	} catch(err) {
		newDrawing.deleteOne()
		return rs.status(500).json({ error: err })
	}
}

export async function deleteDrawing(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	else {
		const target = await Drawing.findByIdAndDelete(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested resource not found." }) }
		else { rs.json(target) }
	}
}