import mongoose from "mongoose";
import Comment from "./commentSchema.js";
const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    drawingId: {
        type: String,
        required: true
    },
    title: String,
    likes: {
        type: Number,
        required: true
    },
    commentIds: {
        type: [String],
        required: true
    }
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
export default mongoose.model("Post", postSchema);
//# sourceMappingURL=postSchema.js.map