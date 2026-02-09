export interface IDrawing {
	src: string,
	userId: string,
	title: string,
	likes: number,
	commentIds: string[]
}

export interface IUser {
	username: string,
	password: string,
	likes: IDrawing[]
}

export interface IComment {
	userId: string,
	drawingId: string,
	content: string
}