import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ModeProvider from './hooks/modeContext.js'
import AuthProvider from './hooks/authContext.js'
import { CookiesProvider } from 'react-cookie'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<BrowserRouter>
		<CookiesProvider>
			<AuthProvider>
				<ModeProvider>
					<App />
				</ModeProvider>
			</AuthProvider>
		</CookiesProvider>
	</BrowserRouter>
  </StrictMode>,
)
