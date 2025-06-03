import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegisterUser from './pages/RegisterUser'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-user" element={<RegisterUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App