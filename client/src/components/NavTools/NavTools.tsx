import { useModeContext } from "../../hooks/modeContext.js"
import Nav from "../Nav.js"
// import Tools from "./Tools.js"
import "./navTools.css"

const NavTools = () => {
	const { canvasMode } = useModeContext()

  return (
	<nav>
		{/* first Nav should be changed to Tools when implemented */}
		{ canvasMode ? <Nav /> : <Nav /> }
	</nav>	
  )
}

export default NavTools