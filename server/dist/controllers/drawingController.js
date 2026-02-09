import Drawing from "../models/drawingSchema.js";
export async function getDrawings(rq, rs) {
    let data;
    if (rq.params.id) {
        data = await Drawing.find({ _id: rq.params.id });
        if (!data) {
            rs.status(404).json({ error: "Drawing does not exist." });
            return;
        }
        else {
            rs.json(data);
        }
    }
    else {
        data = await Drawing.find({});
    }
    rs.json(data);
}
export async function createDrawing(rq, rs) {
    const { src, title } = rq.body;
    if (src && title) {
        const newDrawing = await Drawing.create({
            src: src,
            title: title,
            userId: "0",
            likes: 0
        });
        rs.json(newDrawing);
    }
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
}
// export function deleteDrawing(rq: Request, rs: Response) {
// 	const drawing: Drawing = drawings.find((drawing, i) => {
// 		if (drawing.id === Number(rq.params.id)) {
// 			return drawings.splice(i, 1)
// 		}
// 	}) as Drawing
// 	drawing ? rs.json(drawing) : rs.status(400).json({ error: "Drawing does not exist." })
// }
//# sourceMappingURL=drawingController.js.map