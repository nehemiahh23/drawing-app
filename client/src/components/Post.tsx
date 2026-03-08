import { FunctionComponent } from "react"

const Post: FunctionComponent<Props> = ({ title }) => {
  return (
	<div className="post">
		{/* <img src={src} alt={alt} /> */}
		<p>{title}</p>
	</div>
  )
}
export default Post

interface Props {
	title: string | undefined
}