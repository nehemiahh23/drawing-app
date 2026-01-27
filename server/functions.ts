import type { Photo, PhotoResponse } from "./app.js"
import "dotenv/config"

const API_KEY: string = process.env.PEXELS_KEY as string

export async function loadPhotos(page_url: string): Promise<[Photo[], string]> {
	const results: Photo[] = []
	const response = await fetch(page_url, { headers: new Headers({ "Authorization": API_KEY })})
	if (!response.ok) { throw new Error(`API call responded with ${response.statusText}`) }
	const data = await response.json() as PhotoResponse

	data.photos.forEach(photo => {
		const newPhoto: Photo = {
			id: photo.id,
			src: photo.src.original,
			url: photo.url,
			author: photo.photographer,
			alt: photo.alt
		} 

		results.push(newPhoto)
	})
	
	return [results, data.next_page]
}