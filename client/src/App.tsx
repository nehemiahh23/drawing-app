import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import { useAuthContext } from "./hooks/authContext.js"
import NavTools from './components/NavTools/NavTools.js'
import Feed from './pages/Feed/Feed.js'
import Studio from './pages/Studio/Studio.js'
import Portfolio from "./pages/Portfolio/Portfolio.js"
import Login from "./pages/Login/Login.js"
import Account from "./pages/Account/Account.js"
import type { IPost } from "./types/dbTypes.js"
import axios from "axios"
import "./App.css"

function App() {
	const context = useAuthContext()
	axios.defaults.headers.common["x-auth-token"] = context.cookies.token
	
	const [username, setUsername] = useState("")
	const [feedData, setFeedData] = useState<IPost[]>([])
	const [drawings, setDrawings] = useState([])
	const [canvasData, setCanvasData] = useState({
		title: "",
		url: "",
		id: ""
	})
	
  return (
	<>
		<NavTools />
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/account' element={<Account setUsername={setUsername} username={username} />} />
			<Route path='/feed' element={<Feed feedData={feedData} setFeedData={setFeedData} />} />
			<Route path='/portfolio' element={<Portfolio drawings={drawings} setDrawings={setDrawings} />} />
			<Route path='/' element={<Studio canvasData={canvasData} setCanvasData={setCanvasData} />} />
		</Routes>
	</>
  )
}

export default App
