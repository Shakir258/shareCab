import React from 'react';
import { Route, Routes } from "react-router-dom";

// Public Pages
import Start from '../pages/public/Start.jsx';
import About from '../pages/public/About.jsx';
import Contact from '../pages/public/Contact.jsx';

// User Pages
import UserSignUp from '../pages/user/UserSignUp.jsx';
import UserProfile from '../pages/user/UserProfile.jsx';
import UserHome from '../pages/user/UserHome.jsx';

// Driver Pages
import CaptainSignUp from '../pages/driver/CaptainSignUp.jsx';

import ProtectedRoute from '../components/ProtectedRoute.jsx';
import NotAuthorized from '../pages/public/NotAuthorized.jsx';
import HomePage from '../pages/public/HomePage.jsx'; // HomePage import yahan rahega
import Login from '../pages/public/Login.jsx';

function AppRoutes() {
    return (
        <Routes>

            {/* 👇 Protected Route for HomePage */}
            <Route
                path="/"
                element={
                    <ProtectedRoute allowedRoles={['USER', 'DRIVER']}>
                        <HomePage />
                    </ProtectedRoute>
                }
            >
                <Route index element={<UserHome />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>

            {/* Public Routes */}
            <Route path="/start" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />

            {/* User Auth Routes */}
            
            <Route path="/user-signup" element={<UserSignUp />} />

            {/* Captain Auth Routes */}
            <Route path="/captain-signup" element={<CaptainSignUp />} />

            {/* Protected Routes - User */}
            <Route
                path="/user/home"
                element={
                    <ProtectedRoute allowedRoles={['USER']}>
                        <UserHome />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/user/profile"
                element={
                    <ProtectedRoute allowedRoles={['USER']}>
                        <UserProfile />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
