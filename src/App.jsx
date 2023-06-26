import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home';
import Footer from './components/Footer';
import LoginPg from './pages/LoginPg';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/search';





const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/userlogin' element={<LoginPg />} />
            <Route path='/userregister' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
