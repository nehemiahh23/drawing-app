import { MouseEvent } from "react"
import { useModeContext } from "../hooks/modeContext.js"
import { Link } from "react-router-dom"

function Nav() {
	const { setStudioMode } = useModeContext()

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		const target = e.target as HTMLElement
		target.id === "studio" ? setStudioMode(true) : setStudioMode(false)
	}

  return (
	<>
		<Link to="/">
			<button onClick={handleClick}>
				<div id="studio">Studio</div>
			</button>
		</Link>
		<Link to="/feed">
			<button onClick={handleClick}>
				<div>Gallery</div>
			</button>
		</Link>
		<Link to="">
			<button disabled>
				<div>Portfolio</div>
			</button>
		</Link>
		{/* TODO: combine prefs and login buttons, conditionally link to own profile or login page statefully */}
		<Link to="">
			<button disabled>
				<div>Preferences</div>
			</button>
		</Link>
		<Link to="/login">
			<button>
				<div>Sign In</div>
			</button>
		</Link>
	</>
  )
}
export default Nav