import { useState, ChangeEvent, SubmitEvent, FunctionComponent } from "react"
import axios from "axios"

const LoginForm: FunctionComponent<Props> = ({ setErrors }) => {
	const [fields, setFields] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		// if (!fields.email || !fields.password) return

		axios.post("http://localhost:3000/login", fields)
		.then(r => console.log(r.data))
		.catch(err => setErrors(err.response.data.errors.map(e => e.msg)))
	}

  return (
	<form id="login" onSubmit={handleSubmit}>
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

interface Props {
	setErrors: React.Dispatch<string[]>
}

export default LoginForm