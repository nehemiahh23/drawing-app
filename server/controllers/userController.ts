import type { AuthRequest } from "../middleware/authMiddleware.js"
import type { Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import User from "../models/userSchema.js"

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