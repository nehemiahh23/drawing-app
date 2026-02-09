import mongoose from "mongoose";
import Drawing from "./drawingSchema.js";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likes: [Drawing]
});
userSchema.set("timestamps", true);
export default mongoose.model("User", userSchema);
//# sourceMappingURL=userSchema.js.map