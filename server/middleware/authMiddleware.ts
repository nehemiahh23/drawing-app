import type { RequestHandler, Request } from "express"
import jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import User from "../models/userSchema.js"
import "dotenv/config"

const JWT_SECRET: string = process.env.JWT_SECRET as string

export interface AuthRequest extends Request {
	payload?: string | JwtPayload
}

// belongs on private routes
const auth: RequestHandler = async (rq: AuthRequest, rs, next) => {
	const token = rq.header('x-auth-token')

	if (!token) { return rs.status(401).json({ msg: "No token provided." }) }
	
	try {
		const decoded = jwt.verify(token, JWT_SECRET)
		rq.payload = decoded
		
		if (!await User.findById((rq.payload as JwtPayload).user.id)) { return rs.status(404).json({ error: "User does not exist." }) }
		
		next()
	} catch (err) {
		rs.status(401).json({ error: "Invalid token." })
	}
}

export default auth