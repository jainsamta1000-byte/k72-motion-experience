import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Stair from './Component/common/Stair.jsx';
import App from './App.jsx';
import NavContext from './Component/Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContext>
          <App />
        </NavContext>
      </Stair>
    </BrowserRouter>

  </StrictMode>,
)
