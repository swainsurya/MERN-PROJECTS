import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import "./index.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <CssBaseline>
    <App />
  </CssBaseline>
)
