// import type { Request, Response } from "express"
// import drawings from "../db/drawings.js"
export {};
// export function getDrawings(rq: Request, rs: Response) {
// 	rq.query.id ? rs.json(drawings.find(drawing => drawing.id === Number(rq.query.id))) : rs.json(drawings)
// }
// export function createDrawing(rq: Request, rs: Response) {
// 	// should check user session before anything
// 	const { src, alt } = rq.body
// 	const lastDrawing: Drawing = drawings.at(-1) as Drawing
// 	const i: number = lastDrawing ? lastDrawing.id + 1 : 1
// 	if (src && alt) {
// 		const newDrawing: Drawing = {
// 			id: i,
// 			src: src,
// 			url: src,
// 			alt: alt,
// 			author: 0, // currently logged in user id
// 			commentIds: []
// 		}
// 		drawings.push(newDrawing)
// 		rs.json(drawings)	
// 	} else {
// 		rs.status(400).json({ error: "Insufficient data to create resource." })
// 	}
// }
// export function deleteDrawing(rq: Request, rs: Response) {
// 	const drawing: Drawing = drawings.find((drawing, i) => {
// 		if (drawing.id === Number(rq.params.id)) {
// 			return drawings.splice(i, 1)
// 		}
// 	}) as Drawing
// 	drawing ? rs.json(drawing) : rs.status(400).json({ error: "Drawing does not exist." })
// }
//# sourceMappingURL=drawingController.js.map