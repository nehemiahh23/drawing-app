import { useEffect, useState } from "react"
import Drawing from "../../components/Drawing.js"
import axios from "axios"
import './portfolio.css'

function Portfolio({ drawings, setDrawings }) {
	const [refresh, setRefresh] = useState(false)
	const [markedList, setMarkedList] = useState<string[]>([])

	useEffect(() => {
		if (!drawings.length || refresh ) {
			axios.get("http://localhost:3000/users/user/drawings")
			.then(r => setDrawings(r.data))
			.catch(err => console.log(err.response))
		}
		setRefresh(false)

		return async () => {
			if (markedList.length) {
				await axios.delete(`http://localhost:3000/api/drawings`, { data: { "ids": markedList } })
				.then(r => console.log(r.data))

				setDrawings(list => list.filter(d => !markedList.includes(d._id)))
				setMarkedList([])
			}
		}
	}, [refresh])

	function handleRefresh(e) {
		!refresh && setRefresh(true)
	}

	return (
	<main>
		<button onClick={handleRefresh}>Refesh</button>
		<div className="drawing-container">
			{ drawings.map(d => <Drawing key={d._id} id={d._id} src={d.src} title={d.title} locked={d.locked} setMarkedList={setMarkedList} />) }
		</div>
	</main>
  )
}
export default Portfolio