import { useContext, createContext, useMemo, ReactNode, useState } from "react"
import { useCookies, Cookies } from "react-cookie"
import axios from "axios"

const AuthContext = createContext(null)

const AuthProvider = ({ children }: Props) => {
	const [cookies, setCookies,  removeCookie] = useCookies(["token"])
	const [errors, setErrors] = useState([])
	
	function login(input: IFormData) {
		axios.post("http://localhost:3000/login", input)
		.then(r => console.log(r.data))
		.catch(err => {
			setErrors(err.response.data.errors.map(e => e.msg))
			console.log(err.response)
		})
	}

	function register(input: IFormData) {
		axios.post("http://localhost:3000/users", input)
		.then(r => console.log(r.data))
		.catch(err => setErrors(err.response.data.errors.map(e => e.msg)))
	}
	
	const cookieData = useMemo(() => ({
		cookies,
		login,
		register,
		errors,
		setErrors
	}), [cookies, errors])
	
	return (
		<AuthContext.Provider value={cookieData}>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthProvider

interface Props {
	children: ReactNode
}

interface IFormData {
	email: string,
	username?: string,
	password: string,
	confirm?: string
}

export const useAuthContext = () => useContext(AuthContext)