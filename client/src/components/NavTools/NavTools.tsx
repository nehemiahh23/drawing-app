import { useModeContext } from "../../hooks/modeContext.js"
import Tools from "../Tools.js"
import Nav from "../Nav.js"
// import Tools from "./Tools.js"
import "./navTools.css"

const NavTools = () => {
	const { studioMode, setStudioMode } = useModeContext()

	function handleClick() {
		const mode: boolean = !studioMode
		setStudioMode(mode)
	}

  return (
	<nav>
		{ studioMode ? <Tools /> : <Nav /> }
		<button onClick={handleClick}>{"<->"}</button>
	</nav>	
  )
}

export default NavTools