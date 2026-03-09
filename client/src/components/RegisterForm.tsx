import { useState, ChangeEvent, SubmitEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/authContext.js"

function RegisterForm() {
	const context = useAuthContext()
	const navigate = useNavigate()
	const [fields, setFields] = useState({
		email: "",
		username: "",
		password: "",
		confirm: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			await context.register(fields)
			
			setFields({
				email: "",
				username: "",
				password: "",
				confirm: ""
			})
		} catch(err) {
			console.log(err)
			return
		}
		
		navigate("/account")
	}

  return (
	<form id="register" onSubmit={handleSubmit}>
		<label htmlFor="email"> E-mail:
			<input type="email" name="email" value={fields.email} onChange={handleChange} /><br />
		</label>
		<label htmlFor="username"> Username:
			<input type="text" name="username" value={fields.username} onChange={handleChange} /><br />
		</label>
		<label htmlFor="password"> Password:
			<input type="password" name="password" value={fields.password} onChange={handleChange} /><br />
		</label>
		<label htmlFor="confirm"> Confirm Password:
			<input type="password" name="confirm" value={fields.confirm} onChange={handleChange} /><br />
		</label>
		<input type="submit" value="Sign Up" />
	</form>
  )
}

export default RegisterForm