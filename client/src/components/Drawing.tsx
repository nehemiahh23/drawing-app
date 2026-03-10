function Drawing({ src, title }) {
  return (
	<div>
		<p>{title}</p>
		<img src={src} alt={title} />
	</div>
  )
}
export default Drawing