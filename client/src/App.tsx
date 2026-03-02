import Feed from './pages/Feed/Feed.js'
import Login from './pages/Login/Login.js'
import { Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <Routes>
		<Route path='/feed' element={<Feed />} />
		<Route path='/' element={<Login />} />
	</Routes>
  )
}

export default App
