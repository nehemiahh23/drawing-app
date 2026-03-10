import { useEffect, useState } from "react"
import Drawing from "../../components/Drawing.js"
import axios from "axios"

function Portfolio({ drawings, setDrawings }) {
	const [refresh, setRefresh] = useState(false)
	const [markedList, setMarkedList] = useState<string[]>([])

	useEffect(() => { // TODO: Add a delete multiple route to optimize this behavior
		if (!drawings.length || refresh ) {
			axios.get("http://localhost:3000/users/user/drawings")
			.then(r => setDrawings(r.data))
			.catch(err => console.log(err.response))
		}
		setRefresh(false)
	}, [refresh])

	function handleRefresh(e) {
		!refresh && setRefresh(true)
	}

	return (
	<div>
		<button onClick={handleRefresh}>Refesh</button>
		{ drawings.map(d => <Drawing key={d._id} id={d._id} src={d.src} title={d.title} locked={d.locked} markedList={markedList} setMarkedList={setMarkedList} />) }
	</div>
  )
}
export default Portfolio