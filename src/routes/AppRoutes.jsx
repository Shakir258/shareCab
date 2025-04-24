import React from 'react';
import { Route, Routes } from "react-router-dom";

// Public Pages
import Start from '../pages/public/Start.jsx';
import HomePage from '../pages/public/HomePage.jsx';
import About from '../pages/public/About.jsx';
import Contact from '../pages/public/Contact.jsx';

// User Pages
import UserLogin from '../pages/user/UserLogin.jsx';
import UserSignUp from '../pages/user/UserSignUp.jsx';
import UserProfile from '../pages/user/UserProfile.jsx';
import UserHome from '../pages/user/UserHome.jsx';

// Driver Pages
import CaptainLogin from '../pages/driver/CaptainLogin.jsx';
import CaptainSignUp from '../pages/driver/CaptainSignUp.jsx';

function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/start" element={<Start />} />
            <Route path="/" element={<HomePage />}>
                <Route index element={<UserHome />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<UserProfile />} />
            </Route>

            {/* User Routes */}
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-signup" element={<UserSignUp />} />

            {/* Driver Routes */}
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/captain-signup" element={<CaptainSignUp />} />
        </Routes>
    );
}

export default AppRoutes;
