import * as createjs from "createjs-module"
import { useState, useEffect, useRef, RefObject } from "react"
import "./canvas.css"

function Canvas() {
	const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
	const stageRef: RefObject<createjs.Stage | null> = useRef(null)
	const cursorRef: RefObject<createjs.Shape | null> = useRef(null)
	const strokeRef: RefObject<createjs.Shape | null> = useRef(null)
	const [pos, setPos] = useState({ x: 0, y: 0 })
	const [strokePos, setStrokePos] = useState({ x: 0, y: 0 })
	const [mouseDown, setMouseDown] = useState(false)

	useEffect(() => {
		if (canvasRef.current) { // canvas dimensions set here to avoid stretching
			canvasRef.current.width = window.innerWidth * 0.75
			canvasRef.current.height = window.innerHeight * 0.8
		}

		const stage = new createjs.Stage("canvas") // create stage on the #canvas element
		stageRef.current = stage

		const cursor = new createjs.Shape() // create cursor obj
		cursor.graphics.setStrokeStyle(1).beginStroke("#000").drawCircle(0, 0, 5) // draw cursor
		cursor.x, cursor.y = pos.x, pos.y // set cursor initial position
		cursorRef.current = cursor
		
		stage.addChild(cursor) // add cursor to stage
		stage.update()
		
		const stroke = new createjs.Shape() // create stroke object (set props and draw inside of drag handler)
		strokeRef.current = stroke

		stage.addEventListener("stagemousemove", handleMove)
		stage.addEventListener("stagemousedown", handleMouseDown)
		stage.addEventListener("stagemouseup", handleMouseUp)
		createjs.Ticker.addEventListener("tick", handleDraw)
		
		return () => {
			stage.removeAllEventListeners()
		}
	}, [])
	
	useEffect(() => {
		if (cursorRef.current && stageRef.current) { // when handleMove changes cursor pos, set the position of cursor object and update stage
			cursorRef.current.x = pos.x
			cursorRef.current.y = pos.y
			stageRef.current.update()
		}
	}, [pos])
	
	useEffect(() => {
		if (strokeRef.current && stageRef.current) { // same as above for stroke starting point
			strokeRef.current.x = strokePos.x
			strokeRef.current.y = strokePos.y
			stageRef.current.update()
		}
	}, [strokePos])
	
	useEffect(() => {
		createjs.Ticker.removeAllEventListeners()
		createjs.Ticker.addEventListener("tick", handleDraw)
	}, [mouseDown])

	function handleMove(e: Object) {
		setPos({...pos, x: e.stageX, y: e.stageY})
	}
	
	function handleMouseDown(e: Object) {
		setStrokePos({...strokePos, x: e.stageX, y: e.stageY})
		setMouseDown(true)
	}
	
	function handleMouseUp(e: Object) {
		setMouseDown(false)
	}
	
	function handleDraw(e: Object) {
		if (mouseDown) {
			console.log("down")
			strokeRef.current?.graphics.moveTo(strokePos.x, strokePos.y).setStrokeStyle(5).beginStroke("#000").lineTo(e.stageX, e.stageY)
			setStrokePos({...strokePos, x: e.stageX, y: e.stageY})
			stageRef.current?.update()
		} else { console.log("up") }
	}

  return (
	<canvas id="canvas" ref={canvasRef} />
  )
}
export default Canvas