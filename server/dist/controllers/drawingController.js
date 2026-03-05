import Drawing from "../models/drawingSchema.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import "dotenv/config";
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
    if (!rq.file) {
        return rs.status(400).json({ error: "Insufficient data to create resource." });
    }
    const payload = rq.payload;
    const type = rq.file.mimetype;
    if (type.slice(0, 6) !== "image/") {
        return rs.status(400).json({ error: "Invalid file type." });
    }
    let newDrawing;
    let uploadRes;
    try {
        // TODO: Change "temp" to a 404 img link
        newDrawing = await Drawing.create({
            ...rq.body,
            src: "temp",
            userId: payload.user.id,
            locked: false
        });
    }
    catch (err) {
        fs.unlink(`./${rq.file.path}`, err => err && console.log(err));
        return rs.status(500).json(err);
    }
    try {
        uploadRes = await cloudinary.uploader.upload(rq.file.path, { public_id: String(newDrawing._id), display_name: newDrawing.title });
        if (!uploadRes.url) {
            throw new Error("Cloud upload failed.");
        }
        newDrawing.src = uploadRes.url;
        await newDrawing.save();
        fs.unlink(`./${rq.file.path}`, err => err && console.log(err));
        rs.json(newDrawing);
    }
    catch (err) {
        newDrawing.deleteOne();
        return rs.status(500).json({ error: err });
    }
}
export async function deleteDrawing(rq, rs) {
    // TODO: Delete from cloud
    const target = await Drawing.findById(rq.params.id);
    const payload = rq.payload;
    if (!rq.params.id) {
        return rs.status(400).json({ error: "Must specify an id parameter to delete." });
    }
    if (!target) {
        return rs.status(404).json({ error: "Requested resource not found." });
    }
    if (target.userId !== payload.user.id) {
        return rs.status(401).json({ error: "Not authorized to delete resource." });
    }
    try {
        target.deleteOne();
        rs.json(target);
    }
    catch (err) {
        return rs.status(500).json({ error: err });
    }
}
//# sourceMappingURL=drawingController.js.map