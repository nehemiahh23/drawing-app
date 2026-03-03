import mongoose from "mongoose";
import type { IComment } from "./types.js";

const commentSchema = new mongoose.Schema<IComment>(
	{
		userId: {
			type: String,
			required: true
		},
		postId: {
			type: String,
			required: true
		},
		content: String
	}
)

commentSchema.set("timestamps", true)

export default mongoose.model<IComment>("Comment", commentSchema)