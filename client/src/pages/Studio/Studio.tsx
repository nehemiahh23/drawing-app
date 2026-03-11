import Canvas from "../../components/Canvas.js"
import "./studio.css"

const Studio: React.FunctionComponent<Props> = ({ canvasData, setCanvasData }) => {
  return (
	<main>
		<Canvas canvasData={canvasData} setCanvasData={setCanvasData} />
	</main>
  )
}

export interface Props {
	canvasData: { title: string, url: string, id: string },
	setCanvasData: React.Dispatch<ICanvasData>
}

interface ICanvasData {
	title: string,
	url: string,
	id: string 
}

export default Studio