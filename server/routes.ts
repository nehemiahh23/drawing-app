import { initialLoad } from "./functions.js"
import type { Application } from "express"

let page_url: string = "https://api.pexels.com/v1/curated?per_page=12"

export default function routes(app: Application): void {
	app.get("/", async (rq, rs) => {
		const data = await initialLoad(page_url)
		rs.setHeader("Access-Control-Allow-Origin", "http://localhost:5500")
		rs.send(data[0])
		page_url = data[1]
	})
}