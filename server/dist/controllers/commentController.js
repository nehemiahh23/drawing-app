import Comment from "../models/commentSchema.js";
import Post from "../models/postSchema.js";
export async function deleteComment(rq, rs) {
    if (!rq.params.id) {
        rs.status(400).json({ error: "Must specify an id parameter to delete." });
    }
    else {
        const target = await Comment.findByIdAndDelete(rq.params.id);
        if (!target) {
            rs.status(404).json({ error: "Requested comment not found." });
        }
        else {
            const post = await Post.findById(target.postId);
            const i = post.commentIds.indexOf(String(target._id));
            post.commentIds.splice(i, 1);
            post.save();
            rs.json(target);
        }
    }
}
export async function getPostComments(rq, rs) {
    if (rq.params.post_id) {
        const post = await Post.findById(rq.params.post_id);
        if (post) {
            const comments = await post.getComments();
            if (comments.length) {
                rs.json(comments);
            }
            else {
                rs.status(404).json({ error: "No comments on requested resource." });
            }
        }
        else {
            rs.status(404).json({ error: "Post does not exist." });
        }
    }
    else {
        rs.status(403).json({ error: "Must query comments using post_id." });
    }
}
export async function createComment(rq, rs) {
    if (rq.params.post_id) {
        const post = await Post.findById(rq.params.post_id);
        if (post) {
            const content = rq.body.content;
            const postId = rq.params.post_id;
            if (content) {
                const newComment = await Comment.create({
                    content: content,
                    postId: postId,
                    userId: "placeholder0000000000000"
                });
                post.commentIds.push(String(newComment._id));
                post.save();
                rs.json(newComment);
            }
            else {
                rs.status(400).json({ error: "Insufficient data to create resource." });
            }
        }
        else {
            rs.status(404).json({ error: "Post does not exist." });
        }
    }
    else {
        rs.status(403).json({ error: "Must post comment with post_id." });
    }
}
//# sourceMappingURL=commentController.js.map