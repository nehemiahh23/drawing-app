import mongoose from "mongoose";
import Comment from "./commentSchema.js"
import type { IDrawing, IComment } from "./types.js";

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
	},
	{
		timestamps: true,
		methods: {
			async getComments() {
				const data: IComment[] = []

				for (let id of this.commentIds) {
					const c: IComment = await Comment.findById(id) as IComment
					console.log(c)
					data.push(c)
				}

				return data
			}
		}	
	}
)

drawingSchema.index({ title: "text" })
drawingSchema.index({ likes: -1 })
drawingSchema.index({ userId: 1 })

export default mongoose.model<IDrawing>("Drawing", drawingSchema)