import type { Request, Response } from "express"
import { validationResult } from "express-validator"
import User from "../models/userSchema.js"

export async function createUser(rq: Request, rs: Response) {
	const errors = validationResult(rq)

	if (!errors.isEmpty()) { return rs.status(400).json({ errors: errors.array() }) }

	const { email, username, password } = rq.body
	
	if (email && username && password) {
		const newUser = await User.create({
			email: email,
			username: username,
			password: password
		})
		
		rs.json(newUser)
		// sign in
	} else {
		rs.status(400).json({ error: "Insufficient data to create resource." })
	}
}

export async function editUser(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to update." }) }
	else {
		let target = await User.findByIdAndUpdate(rq.params.id, rq.body)
		target = await User.findById(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested user not found." }) }
		else { rs.json(target) }
	}
}

export async function deleteUser(rq: Request, rs: Response) {
	if (!rq.params.id) { rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	else {
		const target = await User.findByIdAndDelete(rq.params.id)
		if (!target) { rs.status(404).json({ error: "Requested user not found." }) }
		else { rs.json(target) }
	}
}