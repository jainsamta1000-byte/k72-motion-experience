import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Works from './pages/Works'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Agency' element={<Agency />}></Route>
        <Route path='/Works' element={<Works />}></Route>
      </Routes>
    </div>
  );
}

export default App
