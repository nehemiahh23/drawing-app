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
        required: true,
        unique: true
    },
    likes: {
        type: Number,
        required: true
    },
    commentIds: [String]
}, {
    timestamps: true,
    methods: {
        async getComments() {
            const data = [];
            for (let id of this.commentIds) {
                const c = await Comment.findById(id);
                data.push(c);
            }
            return data;
        }
    }
});
drawingSchema.index({ title: "text" });
drawingSchema.index({ likes: -1 });
drawingSchema.index({ userId: 1 });
export default mongoose.model("Drawing", drawingSchema);
//# sourceMappingURL=drawingSchema.js.map