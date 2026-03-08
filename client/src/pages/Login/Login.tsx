import { MouseEventHandler, useState } from "react"
import { useAuthContext } from "../../hooks/authContext.js"
import LoginForm from "../../components/LoginForm.js"
import RegisterForm from "../../components/RegisterForm.js"
import "./login.css"

function Login() {
	const [register, setRegister] = useState(false)
	const context = useAuthContext()

	const handleClick: MouseEventHandler = (e) => {
		e.preventDefault()
		setRegister(r => !r)
		context.setErrors([])
	}
	
  return (
	<>
		<fieldset>
			{ register ? <RegisterForm /> : <LoginForm /> }
			<a href="" onClick={handleClick}>{ register ? "Login" : "Register" }</a>
			{ context.errors.map(e => <p>{e}</p>) }
		</fieldset>
	</>
  )
}
export default Login