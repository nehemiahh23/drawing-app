import { Document } from "mongoose"

export interface IDrawing extends Document {
	src: string,
	userId: string,
	title: string,
	locked: boolean,
	deletePost(): Promise<void>
}

export interface IUser {
	email: string,
	username: string,
	password: string,
	likes: string[],
	getDrawings(): Promise<IDrawing[]>
	// getLikes(): Promise<IDrawing[]> should be list of posts
}

export interface IComment extends Document {
	userId: string,
	postId: string,
	content: string
}

export interface IPost extends Document {
	userId: string,
	username: string,
	drawingId: string,
	src: string,
	title?: string,
	likes: number,
	commentIds: string[],
	getComments(): Promise<IComment[]>,
	deleteComments(): Promise<void>
}