export interface IPost {
	_id: string,
	userId: string,
	drawingId: string,
	title?: string,
	likes: number,
	commentIds: string[],
}