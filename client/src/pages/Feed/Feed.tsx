import { FunctionComponent, useEffect } from "react"
import Post from "../../components/Post.js"
import type { IPost } from "../../types/dbTypes.js"
import axios from "axios"
import "./feed.css"

const Feed: FunctionComponent<Props> = ({ feedData, setFeedData }) => {
	// const [link, setLink] = useState(`https://api.pexels.com/v1/curated?page=1&per_page=12`)
	
	// const handleScroll = async (_e) => {
	// 	const pos = Math.ceil(window.scrollY + window.innerHeight)
	// 	pos >= document.body.scrollHeight && fetchDrawings()
	// }
	
	useEffect(() => {
		if (!feedData.length){
			axios.get("http://localhost:3000/api/posts")
			.then(r => setFeedData(r.data))
		}
		// window.addEventListener("scroll", handleScroll)

		// return () => {
		// 	window.removeEventListener("scroll", handleScroll)
		// }
	}, [])

  return (
	<main>
		{ feedData.map(p => <Post key={p._id} {...p} />) }
	</main>
  )
}

interface Props {
	feedData: IPost[],
	setFeedData: React.Dispatch<IPost[]>
}

export default Feed