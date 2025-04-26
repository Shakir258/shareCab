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


import ProtectedRoute from '../components/ProtectedRoute.jsx';
import NotAuthorized from '../pages/public/NotAuthorized.jsx';

function AppRoutes() {
    return (
        <Routes>

            {/* 👇 Nested route for homepage */}
            <Route path="/" element={<HomePage />}>
                <Route index element={<UserHome />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>


            {/* Public Routes */}
            <Route path="/start" element={<Start />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />

            {/* User Auth Routes */}
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-signup" element={<UserSignUp />} />

            {/* Captain Auth Routes */}
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/captain-signup" element={<CaptainSignUp />} />

            {/* Protected Routes - User */}
            <Route
                path="/user/home"
                element={
                    <ProtectedRoute allowedRoles={['user']}>
                        <UserHome />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/user/profile"
                element={
                    <ProtectedRoute allowedRoles={['user']}>
                        <UserProfile />
                    </ProtectedRoute>
                }
            />

            {/* Protected Routes - Captain (future example) */}
            {/* 
        <Route
            path="/captain/dashboard"
            element={
            <ProtectedRoute allowedRoles={['captain']}>
                <CaptainDashboard />
            </ProtectedRoute>
            }
            /> 
          */}
        </Routes>
    );
};

export default AppRoutes;