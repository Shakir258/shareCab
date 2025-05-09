import React from 'react';
import { Route, Routes } from "react-router-dom";

// Public Pages
import Start from '../pages/public/Start.jsx';
import About from '../pages/public/About.jsx';
import Contact from '../pages/public/Contact.jsx';

// User Pages
import UserSignUp from '../pages/user/UserSignUp.jsx';
import UserHome from '../pages/user/UserHome.jsx';

// Driver Pages
import CaptainSignUp from '../pages/driver/CaptainSignUp.jsx';

import ProtectedRoute from '../components/ProtectedRoute.jsx';
import NotAuthorized from '../pages/public/NotAuthorized.jsx';
import MainContainer from '../pages/public/MainContainer.jsx'; // HomePage import yahan rahega
import Login from '../pages/public/Login.jsx';
import DriverHome from '../pages/driver/DriverHome.jsx';
import UserProfile from '../pages/user/UserProfile.jsx';
import DriverProfile from '../pages/driver/DriverProfile.jsx';

function AppRoutes() {
    return (
        <Routes>

            {/* 👇 Protected Route for HomePage */}
            <Route
                path="/" element={
                    <ProtectedRoute allowedRoles={['USER', 'DRIVER']}>
                        <MainContainer />
                    </ProtectedRoute>
                }
            >
                <Route path='/user' element={
                    <ProtectedRoute allowedRoles={['USER']}>
                        <UserHome />
                    </ProtectedRoute>
                } />
                <Route path='/driver' element={
                    <ProtectedRoute allowedRoles={['DRIVER']}>
                        <DriverHome />
                    </ProtectedRoute>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={
                    <ProtectedRoute allowedRoles={['USER']}>
                        <UserProfile />
                    </ProtectedRoute>
                } />

                <Route path="/driver-profile" element={
                    <ProtectedRoute allowedRoles={['DRIVER']}>
                        <DriverProfile />
                    </ProtectedRoute>
                } />




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

        </Routes>
    );
};

export default AppRoutes;
