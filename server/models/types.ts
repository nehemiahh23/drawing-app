export interface Photo {
	id: number,
	src: String,
	url: String,
	author: String | Number,
	alt: String
	comment_ids: Number[]
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