import { initialLoad } from "./routes.js"
initialLoad()
export interface Photo {
	id: Number,
	src: String,
	url: String,
	author: String
}

const photos: Photo[] = []

export default photos