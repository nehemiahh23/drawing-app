import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from "react"

export const ModeContext = createContext<StudioMode>({ studioMode: true, setStudioMode: () => {} } as IModeContext)

const ModeProvider = ({ children }: Props) => {
	const [studioMode, setStudioMode] = useState<boolean>(true)

	return (
		<ModeContext.Provider value={{ studioMode, setStudioMode }}>
			{ children }
		</ModeContext.Provider>
	)
}

export default ModeProvider

interface Props {
	children: ReactNode
}

export type StudioMode = {
	studioMode: boolean,
	setStudioMode: (c: boolean) => void
}

export interface IModeContext {
	studioMode: boolean,
	setStudioMode: Dispatch<SetStateAction<boolean>>
}

export const useModeContext = () => useContext(ModeContext)