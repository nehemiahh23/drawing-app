import type { AuthRequest } from "../middleware/authMiddleware.js"
import type { Request, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import User from "../models/userSchema.js"
import "dotenv/config"

const JWT_SECRET: string = process.env.JWT_SECRET as string

export async function getUsers(rq: Request, rs: Response) {
	let data
	
	if (rq.params.id) {
		data = await User.findById(rq.params.id).select({ username: 1, likes: 1 })
		if (!data) { return rs.status(404).json({ error: "User does not exist." }) }
		rs.json(data)
	} else {
		data = await User.find({}).select({ username: 1, likes: 1 })
		rs.json(data)
	}
}

export async function getSelf(rq: AuthRequest, rs: Response) {
	const payload: JwtPayload = rq.payload as JwtPayload 

	let target = await User.findById(payload.user.id)
	if (!target) { rs.status(404).json({ error: "Requested user not found." }) }
	else { rs.json(target) }
}

export async function getDrawings(rq: AuthRequest, rs: Response) {
	const payload: JwtPayload = rq.payload as JwtPayload 
	let target = await User.findById(payload.user.id)
	if (!target) { return rs.status(404).json({ error: "Requested user not found." }) }

	let data = await target.getDrawings()
	if (!data) { rs.status(404).json({ errors: { msg: "No drawings associated with this user." } }) }
	else { rs.json(data) }
}

export async function editUser(rq: AuthRequest, rs: Response) {
	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to update." }) }
	
	const payload: JwtPayload = rq.payload as JwtPayload 
	if (rq.params.id !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to update resource." }) }

	let target = await User.findByIdAndUpdate(rq.params.id, rq.body)
	target = await User.findById(rq.params.id)
	if (!target) { rs.status(404).json({ error: "Requested user not found." }) }
	else { rs.json(target) }
}

export async function deleteUser(rq: AuthRequest, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to delete." }) }

	const payload: JwtPayload = rq.payload as JwtPayload 
	if (rq.params.id !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to delete resource." }) }

	else {
		const target = await User.findByIdAndDelete(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested user not found." }) }
		else { rs.json(target) }
	}
}