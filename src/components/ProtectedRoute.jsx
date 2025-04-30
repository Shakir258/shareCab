import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // ✅ named import

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/start" replace />;
    }

    try {
        const decoded = jwtDecode(token); // ✅ no .default
        console.log("Decoded JWT:", decoded);

        const userRole = decoded.role;

        if (!allowedRoles.includes(userRole)) {
            return <Navigate to="/not-authorized" replace />;
        }
        

        return children;

    } catch (err) {
        console.error("Token decode failed:", err);
        return <Navigate to="/start" replace />;
    }
};

export default ProtectedRoute;
