import mongoose from "mongoose";
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
    likes: {
        type: Number,
        required: true
    },
    commentIds: [String]
});
drawingSchema.set("timestamps", true);
export default mongoose.model("Drawing", drawingSchema);
//# sourceMappingURL=drawingSchema.js.map