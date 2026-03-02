import { Routes, Route } from 'react-router-dom'
import NavTools from './components/NavTools/NavTools.js'
import Feed from './pages/Feed/Feed.js'
import Canvas from './pages/Canvas/Canvas.js'
import "./App.css"

function App() {
	

  return (
	<>
		<NavTools />
		<Routes>
			<Route path='/feed' element={<Feed />} />
			<Route path='/' element={<Canvas />} />
		</Routes>
	</>
  )
}

export default App
