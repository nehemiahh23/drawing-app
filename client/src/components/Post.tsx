import { FunctionComponent } from "react"

const Post: FunctionComponent<Props> = ({ src, alt, author }) => {
  return (
	<div className="post">
		<img src={src} alt={alt} />
		<p>by {author}</p>
	</div>
  )
}
export default Post

interface Props {
	src: string,
	alt: string,
	author: string
}