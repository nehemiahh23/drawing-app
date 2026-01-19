import type { Photo } from "./app.js"
import "dotenv/config"

interface PhotoResponse {
	page: number,
	per_page: number,
	photos: Array<{ id: number, src: { original: string }, url: string, photographer: string }>,
	total_results: number,
	next_page: string
}

const API_KEY: string = process.env.PEXELS_KEY as string
let nextPage: string = "https://api.pexels.com/v1/curated?per_page=3"

export async function initialLoad(): Promise<Photo[]> {
	const results: Photo[] = []
	// TODO: ADD HEADERS AND CATCH CANCER AGAIN
	const response = await fetch(nextPage, { headers: new Headers({ "Authorization": API_KEY })})
	if (!response.ok) { throw new Error(`API call responded with ${response.statusText}`) }
	const data = await response.json() as PhotoResponse
	
	data.photos.forEach(photo => {
		const newPhoto: Photo = {
			id: photo.id,
			src: photo.src.original,
			url: photo.url,
			author: photo.photographer
		} 

		results.push(newPhoto)
	})

	nextPage = data.next_page
	console.log(results)

	return results
}