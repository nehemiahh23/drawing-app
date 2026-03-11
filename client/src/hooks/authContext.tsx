import { useContext, createContext, useMemo, ReactNode, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"

const AuthContext = createContext(null)

const AuthProvider = ({ children }: Props) => {
	const [cookies, setCookies,  removeCookie] = useCookies(["token"])
	const [userId, setUserId] = useState("")
	const [errors, setErrors] = useState([])

	async function login(input: IFormData) {
		try {
			const r = await axios.post("http://localhost:3000/login", input)
			setCookies("token", r.data.token)

			const u = await axios.get("http://localhost:3000/users/user/settings", { headers: {"x-auth-token": r.data.token} })
			setUserId(u.data._id)
		} catch (err) {
			// console.log(err.response)
			setErrors(err.response.data.errors.map(e => e.msg))
		}
	}

	async function register(input: IFormData) {
		try {
			const r = await axios.post("http://localhost:3000/users", input)
			setCookies("token", r.data.token)

			const u = await axios.get("http://localhost:3000/users/user/settings", { headers: {"x-auth-token": r.data.token} })
			setUserId(u.data._id)
		} catch (err) {
			// console.log(err.response)
			setErrors(err.response.data.errors.map(e => e.msg))
		}
	}

	function logout() {
		["token"].forEach((token) => removeCookie("token"))
		setUserId("")
	}
	
	const cookieData = useMemo(() => ({
		cookies,
		login,
		logout,
		register,
		errors,
		setErrors,
		userId
	}), [cookies, errors, userId])
	
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