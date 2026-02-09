import mongoose from "mongoose";
import type { IUser } from "./types.js";
import Drawing from "./drawingSchema.js"

const userSchema = new mongoose.Schema<IUser>(
	{
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		likes: [Drawing]
	}
)

userSchema.set("timestamps", true)

export default mongoose.model("User", userSchema)