import mongoose from "mongoose";
import Comment from "./commentSchema.js"
import type { IPost, IComment } from "./types.js"

const postSchema = new mongoose.Schema<IPost>(
	{
		userId: {
			type: String,
			required: true
		},
		drawingId: {
			type: String,
			required: true
		},
		title: String,
		likes: {
			type: Number,
			required: true
		},
		commentIds: {
			type: [String],
			required: true
		}
	},
	{
		timestamps: true,
		methods: {
			async getComments() {
				const data: IComment[] = []

				for (let id of this.commentIds) {
					const c: IComment = await Comment.findById(id) as IComment
					data.push(c)
				}

				return data
			}
		}
	}
)

export default mongoose.model<IPost>("Post", postSchema)