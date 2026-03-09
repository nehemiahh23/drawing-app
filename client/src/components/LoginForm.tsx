import { useState, ChangeEvent, SubmitEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/authContext.js"

function LoginForm() {
	const context = useAuthContext()
	const navigate = useNavigate()
	const [fields, setFields] = useState({
		email: "",
		password: ""
	})

	useEffect(() => {
		context.cookies.token ? navigate("/account") : null
	}, [context.cookies.token])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		await context.login(fields)

		setFields({
			email: "",
			password: ""
		})
	}

  return (
	<form id="login" onSubmit={handleSubmit}>
		<label htmlFor="email"> E-mail:
			<input type="email" name="email" value={fields.email} onChange={handleChange} /><br />
		</label>
		<label htmlFor="password"> Password:
			<input type="password" name="password" value={fields.password} onChange={handleChange} /><br />
		</label>
		<input type="submit" value="Log In" />
	</form>
  )
}

export default LoginForm