import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../auth/authHelper'; // authHelper file mein isLoggedIn function bana hai

const ProtectedRoute = ({ children, allowedRoles }) => {
    // Check localStorage se login status
    const loggedIn = isLoggedIn();

    if (!loggedIn) {
        return <Navigate to="/start" replace />;
    }

    // (Optional) role ke liye extra check laga sakte hain future mein
    return children;
};

export default ProtectedRoute;
