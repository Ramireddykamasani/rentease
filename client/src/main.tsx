import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/nav/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
   <Navbar/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
