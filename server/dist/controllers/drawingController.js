import Drawing from "../models/drawingSchema.js";
export async function getDrawings(rq, rs) {
    let data;
    if (rq.params.id) {
        data = await Drawing.find({ _id: rq.params.id });
        if (!data.length) {
            rs.status(404).json({ error: "Drawing does not exist." });
        }
        else {
            rs.json(data);
        }
    }
    else {
        data = await Drawing.find({});
        rs.json(data);
    }
}
export async function createDrawing(rq, rs) {
    // const newDrawing = await Drawing.create({
    // 	...rq.body,
    // 	userId: "0",
    // 	likes: 0
    // })
    // rs.json(newDrawing)
    console.log(rq.file);
    rs.json({ msg: "Uploaded drawing successfully." });
}
export async function deleteDrawing(rq, rs) {
    if (!rq.params.id) {
        rs.status(400).json({ error: "Must specify an id parameter to delete." });
    }
    else {
        const target = await Drawing.findByIdAndDelete(rq.params.id);
        if (!target) {
            rs.status(404).json({ error: "Requested resource not found." });
        }
        else {
            rs.json(target);
        }
    }
}
//# sourceMappingURL=drawingController.js.map