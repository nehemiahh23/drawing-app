import mongoose from "mongoose";
import Drawing from "./drawingSchema.js";
const userSchema = new mongoose.Schema({
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
}, {
    methods: {
        async getDrawings() {
            const data = await Drawing.find({ userId: String(this._id) });
            return data;
        }
    }
});
userSchema.index({ username: "text" });
userSchema.set("timestamps", true);
export default mongoose.model("User", userSchema);
//# sourceMappingURL=userSchema.js.map