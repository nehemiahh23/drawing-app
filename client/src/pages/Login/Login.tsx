import { MouseEventHandler, useState } from "react"
import LoginForm from "../../components/LoginForm.js"
import RegisterForm from "../../components/RegisterForm.js"
import "./login.css"

function Login() {
	const [register, setRegister] = useState(false)
	const [errors, setErrors] = useState([])

	const handleClick: MouseEventHandler = (e) => {
		e.preventDefault()
		setRegister(r => !r)
		setErrors([])
	}
	
  return (
	<>
		<fieldset>
			{ register ? <RegisterForm setErrors={setErrors} /> : <LoginForm setErrors={setErrors} /> }
			<a href="" onClick={handleClick}>{ register ? "Login" : "Register" }</a>
			{ errors.map(e => <p>{e}</p>) }
		</fieldset>
	</>
  )
}
export default Login