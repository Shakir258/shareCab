// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useContext(UserContext);

    if (!user?.isAuthenticated) {
        return <Navigate to="/start" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
