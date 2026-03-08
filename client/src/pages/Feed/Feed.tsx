import axios from "axios"
import { useEffect, useState } from "react"
import Post from "../../components/Post.js"
import "./feed.css"

function Feed() {
	const [link, setLink] = useState(`https://api.pexels.com/v1/curated?page=1&per_page=12`)
	const [data, setData] = useState([]) // TODO: Elevate this state so it stays rather than fetching every render
	
	axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_PEXELS_KEY
	
	const handleScroll = async (_e) => {
		const pos = Math.ceil(window.scrollY + window.innerHeight)
		pos >= document.body.scrollHeight && fetchDrawings()
	}
	
	async function fetchDrawings() {
		let r = await axios.get(link)
		setData(r.data.photos)
		setLink(r.data.next_page)
	}
	
	useEffect(() => {
		fetchDrawings()
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

  return (
	<main>
		{ data.map(p => <Post key={p.id} src={p.src.original} alt={p.alt} author={p.photographer} />) }
	</main>
  )
}

interface IPhoto {
}

export default Feed