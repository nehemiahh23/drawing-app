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

// drawingSchema.methods.getComments = async function (cb: Function) {
// 	const data: any[] = []

// 	for (let id of this.commentIds) {
// 		console.log(await Comment.findById({ _id: id }))
// 		// data.push(Comment.findById({ _id: id }))
// 	}

// 	return data
// }

// drawingSchema.set("timestamps", true)

export default mongoose.model<IDrawing>("Drawing", drawingSchema)