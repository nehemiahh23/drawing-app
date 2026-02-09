import { Schema } from "mongoose";
const drawingSchema = new Schema({
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
    commentIds: {
        type: [Number],
        required: true
    }
});
//# sourceMappingURL=drawingSchema.js.map