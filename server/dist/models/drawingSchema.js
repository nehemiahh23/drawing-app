import mongoose from "mongoose";
import Comment from "./commentSchema.js";
const drawingSchema = new mongoose.Schema({
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
}, {
    timestamps: true
});
drawingSchema.index({ title: "text" });
drawingSchema.index({ likes: -1 });
drawingSchema.index({ userId: 1 });
export default mongoose.model("Drawing", drawingSchema);
//# sourceMappingURL=drawingSchema.js.map