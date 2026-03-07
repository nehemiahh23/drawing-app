import * as createjs from "createjs-module"
import { useState, useEffect, useRef, RefObject } from "react"
import "./canvas.css"

function Canvas() {
	const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
	const stageRef: RefObject<createjs.Stage | null> = useRef(null)
	const shapeRef: RefObject<createjs.Shape | null> = useRef(null)
	const [pos, setPos] = useState({ x: 0, y: 0 })

	useEffect(() => {
		if (canvasRef.current) {
			canvasRef.current.width = window.innerWidth * 0.75
			canvasRef.current.height = window.innerHeight * 0.8
		}

		const stage = new createjs.Stage("canvas") // create stage on the #canvas element
		stageRef.current = stage // store stage ref

		const cursor = new createjs.Shape() // create cursor
		cursor.graphics.setStrokeStyle(1).beginStroke("#000").drawCircle(0, 0, 2)
		cursor.x = pos.x
		cursor.y = pos.y
		shapeRef.current = cursor

		stage.addChild(cursor)
		stage.update()
		stage.addEventListener("stagemousemove", handleMove)

		return () => {
			stage.removeAllEventListeners()
		}
	}, [])

	useEffect(() => {
		if (shapeRef.current && stageRef.current) {
			shapeRef.current.x = pos.x
			shapeRef.current.y = pos.y
			stageRef.current.update()
		}
	}, [pos])

	function handleMove(e: Object) {
		setPos({...pos, x: e.stageX, y: e.stageY})
	}

  return (
	<canvas id="canvas" ref={canvasRef} />
  )
}
export default Canvas