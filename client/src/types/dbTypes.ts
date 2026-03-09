export interface IPost {
	_id: string,
	userId: string,
	username: string,
	drawingId: string,
	src: string,
	title?: string,
	likes: number,
	commentIds: string[]
}