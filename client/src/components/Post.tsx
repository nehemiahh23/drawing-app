import { FunctionComponent } from "react"

const Post: FunctionComponent<Props> = ({ username, title, src, likes }) => {
  return (
	<div className="post">
		<img src={src} alt={title} />
		<h2>{title}</h2>
		<p>by {username}</p>
		<div>Likes: {likes}</div>
	</div>
  )
}
export default Post

interface Props {
	username: string,
	src: string,
	title?: string,
	likes: number
}