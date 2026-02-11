import { Document } from "mongoose"

export interface IDrawing extends Document {
	src: string,
	userId: string,
	title: string,
	likes: number,
	commentIds: string[],
	getComments(): Promise<IComment[]>
}

export interface IUser {
	email: string,
	username: string,
	password: string,
	likes: IDrawing[]
}

export interface IComment extends Document {
	userId: string,
	drawingId: string,
	content: string
}