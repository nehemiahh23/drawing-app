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

export async function initialLoad(page_url: string): Promise<Photo[]> {
	const results: Photo[] = []
	const response = await fetch(page_url, { headers: new Headers({ "Authorization": API_KEY })})
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

	page_url = data.next_page

	return results
}