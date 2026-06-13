import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Stair } from './Component/common/Stair';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stair/>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
