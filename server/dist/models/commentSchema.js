import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    drawingId: {
        type: String,
        required: true
    },
    content: String
});
commentSchema.set("timestamps", true);
export default mongoose.model("Comment", commentSchema);
//# sourceMappingURL=commentSchema.js.map