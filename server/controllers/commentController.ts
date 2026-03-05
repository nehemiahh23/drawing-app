import type { AuthRequest } from "../middleware/authMiddleware.js"
import type { Request, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import Comment from "../models/commentSchema.js"
import Post from "../models/postSchema.js"
import type { IPost } from "../models/types.js"

export async function deleteComment(rq: AuthRequest, rs: Response) {
	const target = await Comment.findById(rq.params.id)
	if (!target) { return rs.status(404).json({ error: "Requested resource not found." }) }

	const post: IPost = await Post.findById(target.postId) as IPost
	const payload: JwtPayload = rq.payload as JwtPayload
	
	if (!rq.params.id) { return rs.status(400).json({ error: "Must specify an id parameter to delete." }) }
	if (target.userId !== payload.user.id && post.userId !== payload.user.id) { return rs.status(401).json({ error: "Not authorized to access resource." }) }

	try {
		await target.deleteOne()

		const i = post.commentIds.indexOf(String(target._id))
		post.commentIds.splice(i, 1)
		await post.save()

		rs.json(target)
	} catch(err) {
		return rs.status(500).json(err)
	}
}

export async function getPostComments(rq: Request, rs: Response) {
	if (rq.params.post_id) {
		const post = await Post.findById(rq.params.post_id)
		
		if (post) {
			const comments = await post.getComments()
			if (comments.length) { rs.json(comments) }
			else { rs.status(404).json({ error: "No comments on requested resource." }) }
		} else {
			rs.status(404).json({ error: "Post does not exist." })
		}
	} else {
		rs.status(403).json({ error: "Must query comments using post_id." })
	}
}

export async function createComment(rq: AuthRequest, rs: Response) {
	const content = rq.body.content
	const postId: string = rq.params.post_id as string
	const post: IPost = await Post.findById(rq.params.post_id) as IPost
	const payload: JwtPayload = rq.payload as JwtPayload
	
	if (!postId || !content) { return rs.status(400).json({ error: "Insufficient data to create resource." }) }
	if (!post) { return rs.status(404).json({ error: "Requested resource not found." }) }

	try {
		const newComment = await Comment.create({ 
			content: content,
			postId: postId, 
			userId: payload.user.id
		})

		post.commentIds.push(String(newComment._id))
		await post.save()

		rs.json(newComment)
	} catch(err) {
		return rs.status(500).json(err)
	}
}