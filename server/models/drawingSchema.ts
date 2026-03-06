import mongoose from "mongoose";
import Post from "./postSchema.js"
import type { IDrawing, IPost } from "./types.js";

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
			required: true
		},
		locked: {
			type: Boolean,
			required: true
		}
	},
	{
		timestamps: true,
		methods: {
			async deletePost() {
				const post: IPost = await Post.findOne({ drawingId: String(this._id) }) as IPost

				if (post) {
					await post.deleteComments()
					await post.deleteOne()
				}
			}
		}
	}
)

drawingSchema.index({ title: "text" })
drawingSchema.index({ likes: -1 })
drawingSchema.index({ userId: 1 })

export default mongoose.model<IDrawing>("Drawing", drawingSchema)