import { useState, ChangeEvent, SubmitEvent, FunctionComponent } from "react"
import axios from "axios"

const RegisterForm: FunctionComponent<Props> = ({ setErrors }) => {
	const [fields, setFields] = useState({
		email: "",
		username: "",
		password: "",
		confirm: ""
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		// if (!fields.email || !fields.password) return

		axios.post("http://localhost:3000/users", fields)
		.then(r => console.log(r.data))
		.catch(err => setErrors(err.response.data.errors.map(e => e.msg)))
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

interface Props {
	setErrors: React.Dispatch<string[]>
}

export default RegisterForm