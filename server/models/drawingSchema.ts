import { Schema } from "mongoose";
import type { IDrawing } from "./types.js";

const drawingSchema = new Schema<IDrawing>(
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
			required: true
		},
		likes: {
			type: Number,
			required: true
		},
		commentIds: {
			type: [Number],
			required: true
		}
	}
)