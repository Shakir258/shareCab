import React from 'react';
import { Route, Routes } from "react-router-dom"

import Start from './pages/Start.jsx'
import UserLogin from './pages/UserLogin.jsx';
import UserSignUp from './pages/UserSignUp.jsx';
import CaptainLogin from './pages/CaptainLogin.jsx';
import CaptainsignUp from './pages/CaptainSignUp.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/start" element={<Start />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainsignUp />} />

      {/* Nested Route under HomePage */}
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
