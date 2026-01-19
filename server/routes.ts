import { initialLoad } from "./functions.js"
import type { Application } from "express"
import type { Photo } from "./app.js"

const cache: Array<Photo[]> = []
let page_url: string = "https://api.pexels.com/v1/curated?page=1&per_page=12"
let page: number = 1

export default function routes(app: Application): void {

	app.get("/curated", async (rq, rs) => {
		if (cache[0]) {
			rs.setHeader("Access-Control-Allow-Origin", "http://localhost:5500")
			rs.send(cache[0])
		} else {
			const data = await initialLoad(page_url)
			rs.setHeader("Access-Control-Allow-Origin", "http://localhost:5500")
			rs.send(data[0])
			cache.push(data[0])
		}
	})
}