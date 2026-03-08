import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import NavTools from './components/NavTools/NavTools.js'
import Feed from './pages/Feed/Feed.js'
import Studio from './pages/Studio/Studio.js'
import type { IPost } from "./types/dbTypes.js"
import "./App.css"

function App() {
	const [data, setData] = useState<IPost[]>([])
	
  return (
	<>
		<NavTools />
		<Routes>
			<Route path='/feed' element={<Feed data={data} setData={setData} />} />
			<Route path='/' element={<Studio />} />
		</Routes>
	</>
  )
}

export default App
