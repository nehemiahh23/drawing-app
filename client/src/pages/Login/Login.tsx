import { MouseEventHandler, useState } from "react"
import LoginForm from "../../components/LoginForm.js"
import RegisterForm from "../../components/RegisterForm.js"
import "./login.css"

function Login() {
	const [register, setRegister] = useState(false)

	const handleClick: MouseEventHandler = (e) => {
		e.preventDefault()
		setRegister(r => !r)
	}
	
  return (
	<>
		<fieldset>
			{ register ? <RegisterForm /> : <LoginForm /> }
			<a href="" onClick={handleClick}>{ register ? "Login" : "Register" }</a>
		</fieldset>
	</>
  )
}
export default Login