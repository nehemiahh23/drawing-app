export interface IDrawing {
	src: string,
	userId: string,
	title: string,
	likes: number,
	commentIds: number[]
}

export interface User {
	username: string,
	password: string,
	favorites: IDrawing[]
}

export interface Comment {
	userId: number,
	drawingId: number,
	content: string
}