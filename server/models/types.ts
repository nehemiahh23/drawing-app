import { Document } from "mongoose"

export interface IDrawing extends Document {
	src: string,
	userId: string,
	title: string,
	locked: boolean,
	likes: number,
	commentIds: string[],
	getComments(): Promise<IComment[]>
}

export interface IUser {
	email: string,
	username: string,
	password: string,
	likes: string[],
	getLikes(): Promise<IDrawing[]>
}

export interface IComment extends Document {
	userId: string,
	postId: string,
	content: string
}

export interface IPost extends Document {
	userId: string,
	drawingId: string,
	title?: string,
	likes: number,
	commentIds: string[],
	getComments(): Promise<IComment[]>
}