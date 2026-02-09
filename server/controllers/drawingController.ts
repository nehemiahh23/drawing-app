import type { Request, Response } from "express"
import Drawing from "../models/drawingSchema.js"

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
	const { src, title } = rq.body
	
	if (src && title) {
		const newDrawing = await Drawing.create({
			src: src,
			title: title,
			userId: "0",
			likes: 0
		})

		rs.json(newDrawing)
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
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