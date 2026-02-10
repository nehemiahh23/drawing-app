import Comment from "../models/commentSchema.js";
import Drawing from "../models/drawingSchema.js";
export async function getDrawingComments(rq, rs) {
    if (rq.params.drawing_id) {
        const drawing = await Drawing.findById(rq.params.drawing_id);
        if (drawing) {
            const comments = await drawing.getComments();
            if (comments.length) {
                rs.json(comments);
            }
            else {
                rs.status(404).json({ error: "No comments on requested resource." });
            }
        }
        else {
            rs.status(404).json({ error: "Drawing does not exist." });
        }
    }
    else {
        rs.status(403).json({ error: "Must query comments using drawing_id)." });
    }
}
// export async function deleteComment(rq: Request, rs: Response) {
// 	const comment: Comment = comments.find((comment, i) => {
// 		if (comment.id === Number(rq.params.id)) {
// 			return comments.splice(i, 1)
// 		}
// 	}) as Comment
// 	const drawing: Drawing = drawings.find(drawing => drawing.id === comment.drawingId) as Drawing
// 	if (!drawing) {
// 		rs.status(400).json({ error: "Requested resource does not exist." })
// 		return
// 	}
// 	if (comment) {
// 		drawing.commentIds.find((id, i) => {
// 			id === comment.id ? drawing.commentIds.splice(i, 1) : null
// 		})
// 		rs.json(comment)
// 	} else {
// 		rs.status(400).json({ error: "Comment does not exist." })
// 	}
// }
// export async function createComment(rq: Request, rs: Response) {
// 	// should check user session before anything
// 	const content = rq.body.content
// 	const lastComment: Comment = comments.at(-1) as Comment
// 	const i: number = lastComment ? lastComment.id + 1 : 1
// 	const drawing: Drawing = drawings.find(drawing => drawing.id === Number(rq.params.drawing_id)) as Drawing
// 	if (!drawing) {
// 		rs.status(400).json({ error: "Drawing does not exist." })
// 		return
// 	}
// 	if (content) {
// 		// TODO: push i to drawing comment id array
// 		const newComment: Comment = {
// 			id: i,
// 			content: content,
// 			drawingId: Number(rq.params.drawing_id),
// 			userId: 0 // currently logged in user id
// 		}
// 		comments.push(newComment)
// 		drawing.commentIds.push(i)
// 		rs.json(newComment)	
// 	} else {
// 		rs.status(400).json({ error: "Insufficient data to create resource." })
// 	}
// }
//# sourceMappingURL=commentController.js.map