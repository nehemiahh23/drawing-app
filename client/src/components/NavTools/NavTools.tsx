import { useModeContext } from "../../hooks/modeContext.js"
import Nav from "../Nav.js"
// import Tools from "./Tools.js"
import "./navTools.css"

const NavTools = () => {
	const { studioMode } = useModeContext()

  return (
	<nav>
		{/* first Nav should be changed to Tools when implemented */}
		{ studioMode ? <Nav /> : <Nav /> }
	</nav>	
  )
}

export default NavTools