import * as createjs from "createjs-module"
import { useState, useEffect, useRef, RefObject } from "react"
import { useAuthContext } from "../hooks/authContext.js"
import axios from "axios"

function Canvas() {
	const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
	const stageRef: RefObject<createjs.Stage | null> = useRef(null)
	const cursorRef: RefObject<createjs.Shape | null> = useRef(null)
	const strokeRef: RefObject<createjs.Shape | null> = useRef(null)

	const [pos, setPos] = useState({ x: 0, y: 0 })
	const [strokePos, setStrokePos] = useState({ x: 0, y: 0 })
	const [mouseDown, setMouseDown] = useState(false)
	
	const context = useAuthContext()
	const [title, setTitle] = useState("placeholder")

	useEffect(() => {
		if (canvasRef.current) { // canvas dimensions set here to avoid stretching
			canvasRef.current.width = window.innerWidth * 0.75
			canvasRef.current.height = window.innerHeight * 0.8
		}

		const stage = new createjs.Stage("canvas") // create stage on the #canvas element
		stageRef.current = stage

		// TODO: create separate layer for cursor to keep it out of the actual image file
		const cursor = new createjs.Shape() // create cursor obj
		cursor.graphics.setStrokeStyle(1).beginStroke("#000").drawCircle(0, 0, 5) // draw cursor
		cursor.x, cursor.y = pos.x, pos.y // set cursor initial position
		cursorRef.current = cursor
		
		const stroke = new createjs.Shape() // create stroke object
		// stroke.graphics.setStrokeStyle(5, "round")
		strokeRef.current = stroke
		
		stage.addChild(cursor) // add objects to stage
		stage.addChild(stroke)
		stage.update()
		
		stage.addEventListener("stagemousemove", handleMove)
		stage.addEventListener("stagemousedown", handleMouseDown)
		stage.addEventListener("stagemouseup", handleMouseUp)
		createjs.Ticker.framerate = 60
		createjs.Ticker.addEventListener("tick", handleDraw)
		
		return () => {
			stage.removeAllEventListeners()
			createjs.Ticker.removeAllEventListeners()
		}
	}, [])
	
	function handleMove(e: Object) { // handles position state
		setPos({...pos, x: e.stageX, y: e.stageY})
	}
	
	useEffect(() => { // updates cursor position as state changes
		if (cursorRef.current && stageRef.current) {
			cursorRef.current.x = pos.x
			cursorRef.current.y = pos.y
			stageRef.current.update()
		}
	}, [pos])
	
	function handleMouseDown(e: Object) { // handles stroke position and mouse state
		strokeRef.current?.graphics.setStrokeStyle(5, "round", "round", undefined, true).beginStroke("#000")
		setStrokePos({...strokePos, x: e.stageX, y: e.stageY})
		setMouseDown(true)
	}
	
	useEffect(() => { // draw initial point of stroke
		strokeRef.current?.graphics.drawCircle(strokePos.x, strokePos.y, 0).beginFill("#000")
		// stageRef.current?.update()
	}, [strokePos])
	
	useEffect(() => { // re-add tick event handler to keep updated stroke position state
		createjs.Ticker.removeAllEventListeners()
		createjs.Ticker.addEventListener("tick", handleDraw)
	}, [mouseDown, pos])
	
	function handleDraw(_e: Object) { // depending on mouse state, fires every tick
		if (mouseDown) {
			strokeRef.current?.graphics.lineTo(pos.x, pos.y).moveTo(pos.x, pos.y)
			stageRef.current?.update()
		}
	}
	
	function handleMouseUp(_e: Object) {
		strokeRef.current?.graphics.endStroke()
		stageRef.current?.update()
		setMouseDown(false)
	}

	function handleSubmit(e: Object) {
		if (!context.cookies.token) return
		
		const payload = new FormData()
		payload.append("title", title)

		canvasRef.current?.toBlob((blob) => {
			const file: Blob = blob as Blob
			payload.append("drawing", file, `${title}.png`)
			payload.entries().forEach(e => console.log(e[0]+ ":"+e[1]))
			axios.postForm("http://localhost:3000/api/drawings", payload)
			.then(r => console.log(r.data))
			.catch(err => console.log(err.response.data))
		})
	}

  return (
	<>
		<canvas id="canvas" ref={canvasRef} />
		{ context.cookies.token && <button onClick={handleSubmit}>Upload</button> }
	</>
  )
}
export default Canvas