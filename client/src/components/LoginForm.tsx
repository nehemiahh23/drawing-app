import { useState, ChangeEvent, SubmitEvent, FunctionComponent } from "react"
import { useAuthContext } from "../hooks/authContext.js"

function LoginForm({ setErrors }) {
	const context = useAuthContext()
	const [fields, setFields] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		context.login(fields)
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