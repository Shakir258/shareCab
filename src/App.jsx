import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx';
import UserSignUp from './pages/UserSignUp.jsx';
import CaptainLogin from './pages/CaptainLogin.jsx';
import CaptainsignUp from './pages/CaptainsignUp.jsx';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-login' element={<UserLogin/>} />
        <Route path='/user-signup' element={<UserSignUp/>} />

        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/user-signup' element={<CaptainsignUp/>} />

      </Routes>
    </div>
  )
}

export default App
