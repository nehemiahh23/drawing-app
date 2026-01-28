import comments from "../db/comments.js";
import photos from "../db/photos.js";
export function getPhotoComments(rq, rs) {
    if (rq.query.photo_id) {
        const data = [];
        const photo = photos.find(photo => photo.id === Number(rq.query.photo_id));
        if (!photo) {
            rs.status(400).json({ error: "Requested resource does not exist." });
            return;
        }
        const ids = photo.comment_ids;
        ids.forEach((id) => {
            const comment = comments.find(c => c.id === id);
            data.push(comment);
        });
        rs.json(data);
    }
    else {
        rs.status(403).json({ error: "Forbidden resource (Must query using photo_id)." });
    }
}
export function deleteComment(rq, rs) {
    const comment = comments.find((comment, i) => {
        if (comment.id === Number(rq.params.id)) {
            return comments.splice(i, 1);
        }
    });
    const photo = photos.find(photo => photo.id === comment.photoId);
    if (!photo) {
        rs.status(400).json({ error: "Requested resource does not exist." });
        return;
    }
    if (comment) {
        photo.comment_ids.find((id, i) => {
            id === comment.id ? photo.comment_ids.splice(i, 1) : null;
        });
        rs.json(comment);
    }
    else {
        rs.status(400).json({ error: "Comment does not exist." });
    }
}
export function createComment(rq, rs) {
    // should check user session before anything
    const content = rq.body.content;
    const lastComment = comments.at(-1);
    const i = lastComment ? lastComment.id + 1 : 1;
    const photo = photos.find(photo => photo.id === Number(rq.params.photo_id));
    if (!photo) {
        rs.status(400).json({ error: "Photo does not exist." });
        return;
    }
    if (content) {
        // TODO: push i to photo comment id array
        const newComment = {
            id: i,
            content: content,
            photoId: Number(rq.params.photo_id),
            userId: 0 // currently logged in user id
        };
        comments.push(newComment);
        photo.comment_ids.push(i);
        rs.json(newComment);
    }
    else {
        rs.status(400).json({ error: "Insufficient data to create resource." });
    }
}
//# sourceMappingURL=commentController.js.map