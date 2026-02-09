import mongoose from "mongoose";
import type { IUser } from "./types.js";
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
	}
)

userSchema.set("timestamps", true)

export default mongoose.model("User", userSchema)