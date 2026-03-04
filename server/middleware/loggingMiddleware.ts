import type { Request, Response, NextFunction, ErrorRequestHandler } from "express"

export function requestLogger(rq: Request, rs: Response, next: NextFunction) {
	console.log(`${rq.method} request sent to ${rq.path}`)

	next()
}

export const globalError: ErrorRequestHandler = (err, _rq, rs, _next) => {
	rs.status(err.status || 500).json({ error: err.message })
}