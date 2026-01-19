import { initialLoad } from "./routes.js"
import "http"

export interface Photo {
	id: Number,
	src: String,
	url: String,
	author: String
}

let page_url: string = "https://api.pexels.com/v1/curated?per_page=12"
const photos: Photo[] = await initialLoad(page_url)

export default photos