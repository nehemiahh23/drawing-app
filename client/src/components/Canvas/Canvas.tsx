import * as createjs from "createjs-module"
import { useEffect, useRef } from "react"
import "./canvas.css"

function Canvas() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const stage = new createjs.Stage("canvas")
		const circle = new createjs.Shape()
		let canvasElem: HTMLCanvasElement
		
		if (canvasRef.current) {
			canvasElem = canvasRef.current as HTMLCanvasElement
			circle.x = canvasElem.width / 2
			circle.y = canvasElem.height / 2
		}
		
		circle.graphics.beginFill("#9900ff").drawCircle(0, 0, 40)
		stage.addChild(circle)
		stage.update()
	}, [])


  return (
	<canvas id="canvas" ref={canvasRef} />
  )
}
export default Canvas