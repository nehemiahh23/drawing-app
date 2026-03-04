import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import "dotenv/config"

const JWT_SECRET: string = process.env.JWT_SECRET as string

export interface AuthRequest extends Request {
	token: string | JwtPayload
}

// belongs on private routes
function auth(rq: AuthRequest, rs: Response, next: NextFunction) {
	const token = rq.header('x-auth-token')

	if (!token) { return rs.status(401).json({ msg: "No token provided." }) }

	try {
		const decoded = jwt.verify(token, JWT_SECRET)
		rq.token = decoded
		next()
	} catch (err) {
		rs.status(401).json({ error: "Invalid token." })
	}
}

export default auth