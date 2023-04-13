import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './components/Footer'
import './style.scss'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/post/:id' element={<Single />} />
            <Route path='/write' element={<Write />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
