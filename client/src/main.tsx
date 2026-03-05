import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ModeProvider from './hooks/modeContext.js'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<BrowserRouter>
		<ModeProvider>
    		<App />
		</ModeProvider>
	</BrowserRouter>
  </StrictMode>,
)
