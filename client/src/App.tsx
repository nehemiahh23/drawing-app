import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import { useAuthContext } from "./hooks/authContext.js"
import NavTools from './components/NavTools/NavTools.js'
import Feed from './pages/Feed/Feed.js'
import Studio from './pages/Studio/Studio.js'
import Login from "./pages/Login/Login.js"
import Account from "./pages/Portfolio/Account.js"
import type { IPost } from "./types/dbTypes.js"
import axios from "axios"
import "./App.css"

function App() {
	const context = useAuthContext()
	axios.defaults.headers.common["x-auth-token"] = context.cookies.token

	const [data, setData] = useState<IPost[]>([])
	
  return (
	<>
		<NavTools />
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/account' element={<Account />} />
			<Route path='/feed' element={<Feed data={data} setData={setData} />} />
			<Route path='/' element={<Studio />} />
		</Routes>
	</>
  )
}

export default App
