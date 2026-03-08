import { useState, ChangeEvent } from "react"

function LoginForm() {
	const [fields, setFields] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

  return (
	<form id="login">
		<label htmlFor="email"> E-mail:
			<input type="email" name="email" value={fields.email} onChange={handleChange} /><br />
		</label>
		<label htmlFor="password"> Password:
			<input type="password" name="password" value={fields.password} onChange={handleChange} /><br />
		</label>
		<input type="submit" value="Sign Up" />
	</form>
  )
}
export default LoginForm