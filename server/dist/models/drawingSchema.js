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
                console.log(c);
                data.push(c);
            }
            return data;
        }
    }
});
// drawingSchema.methods.getComments = async function (cb: Function) {
// 	const data: any[] = []
// 	for (let id of this.commentIds) {
// 		console.log(await Comment.findById({ _id: id }))
// 		// data.push(Comment.findById({ _id: id }))
// 	}
// 	return data
// }
// drawingSchema.set("timestamps", true)
export default mongoose.model("Drawing", drawingSchema);
//# sourceMappingURL=drawingSchema.js.map