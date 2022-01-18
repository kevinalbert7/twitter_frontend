import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'

import Login from './pages/Login'
import Home from './pages/Home'
import Profil from './pages/Profil'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/:id' element={<Profil />}/>
        <Route path='/NotFound' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
