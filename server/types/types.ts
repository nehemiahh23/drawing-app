export interface Photo {
	id: number,
	src: String,
	url: String,
	author: String | Number,
	alt: String
	comment_ids: Number[]
}

export interface PhotoResponse {
	page: number,
	per_page: number,
	photos: Array<{ id: number, src: { original: string }, url: string, photographer: string, alt: string }>,
	total_results: number,
	next_page: string
}

export interface User {
	id: number,
	username: String,
	password: String,
	favorites: Photo[]
}

export interface Comment {
	id: number,
	userId: number,
	photoId: number,
	content: String
}