import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/NotFound' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route exact path='/' element={<Home />}/>
//     <Route path='/Home' element={<Home />}/>
//     <Route path='/Main' element={<Main />}/>
//     <Route path='/Profil' element={<Profil />}/>
//     <Route path='/Tweets' element={<Tweets />}/>
//     <Route path='/Messages' element={<Messages />}/>
//   </Routes>
// </BrowserRouter>

// <Sidebar


// />