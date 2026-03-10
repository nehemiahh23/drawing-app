import { use, useState } from "react"
import axios from "axios"

function Drawing({ id, src, title, locked, markedList, setMarkedList }) {
	const [marked, setMarked] = useState(false)
	
	function handlePost() {
		
	}
	
	function handleEdit() {

	}
	
	function handleDelete(e) {
		// axios.delete(`http://localhost:3000/api/drawings/${id}`)
		// .then()
		if (!marked) {
			setMarkedList(list => [...list, id])
			setMarked(true)
		} else {
			setMarkedList(list => list.filter(i => i !== id))
			setMarked(false)
		}
	}
	
	return (
	<div>
		<h1>{title}</h1>
		<img src={src} alt={title} />
		<button>{ locked ? "View Post" : "Create Post" }</button>
		<button>Edit</button>
		<button onClick={handleDelete}>{ marked ? "Marked For Deletion" : "Delete" }</button>
	</div>
  )
}
export default Drawing