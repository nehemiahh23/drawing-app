import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from "react"

export const ModeContext = createContext<CanvasMode>({ canvasMode: true, setCanvasMode: () => {} } as IModeContext)

const ModeProvider = ({ children }: Props) => {
	const [canvasMode, setCanvasMode] = useState<boolean>(true)

	return (
		<ModeContext.Provider value={{ canvasMode, setCanvasMode }}>
			{ children }
		</ModeContext.Provider>
	)
}

export default ModeProvider

interface Props {
	children: ReactNode
}

export type CanvasMode = {
	canvasMode: boolean,
	setCanvasMode: (c: boolean) => void
}

export interface IModeContext {
	canvasMode: boolean,
	setCanvasMode: Dispatch<SetStateAction<boolean>>
}

export const useModeContext = () => useContext(ModeContext)