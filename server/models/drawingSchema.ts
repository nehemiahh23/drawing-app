import mongoose from "mongoose";
import type { IDrawing } from "./types.js";

const drawingSchema = new mongoose.Schema<IDrawing>(
	{
		src: {
			type: String,
			required: true
		},
		userId: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true,
			unique: true
		},
		likes: {
			type: Number,
			required: true
		},
		commentIds: [String]
	}
)

drawingSchema.set("timestamps", true)

export default mongoose.model("Drawing", drawingSchema)