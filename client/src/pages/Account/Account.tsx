import { useAuthContext } from "../../hooks/authContext.js"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

function Account({ setUsername, username }) {
	const navigate = useNavigate()
	const context = useAuthContext()

	useEffect(() => {
		if (!username.length) {
			axios.get(`http://localhost:3000/users/user/settings`, {headers: {"x-auth-token": context.cookies.token} })
			.then(r => setUsername(r.data.username))
			.catch(err => err.response.data)
		}
	}, [])

	function handleClick() {
		context.logout()
		navigate("/login")
	}
	
	return (
	<div>
		<h1>Welcome, { username }!</h1>
		<button onClick={handleClick}>Log Out</button>
	</div>
  )
}
export default Account