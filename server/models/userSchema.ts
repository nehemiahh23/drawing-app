import mongoose from "mongoose";
import type { IUser, IDrawing } from "./types.js";
import Drawing from "./drawingSchema.js"

const userSchema = new mongoose.Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		username: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		likes: [String]
	},
	{
		methods: {
			async getDrawings() {
				const data: IDrawing[] =  await Drawing.find({ userId: String(this._id) }) as IDrawing[]
				return data
			}
		}
	}
)

userSchema.index({ username: "text" })

userSchema.set("timestamps", true)

export default mongoose.model("User", userSchema)