import { MouseEvent } from "react"
import { useModeContext } from "../hooks/modeContext.js"
import { Link } from "react-router-dom"

function Nav() {
	const { setCanvasMode } = useModeContext()

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		const target = e.target as HTMLElement
		target.id === "canvas" ? setCanvasMode(true) : setCanvasMode(false)
	}

  return (
	<>
		<Link to="/">
			<button onClick={handleClick}>
				<div id="canvas">Canvas</div>
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
		<Link to="">
			<button disabled>
				<div>Preferences</div>
			</button>
		</Link>
		<Link to="">
			<button disabled>
				<div>Sign In</div>
			</button>
		</Link>
	</>
  )
}
export default Nav