import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RoleBasedHomeLink = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/start");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const role = decoded.role;

            if (role === "USER") {
                navigate("/user");
            } else if (role === "DRIVER") {
                navigate("/driver");
            } else {
                navigate("/not-authorized");
            }
        } catch (error) {
            console.error("Invalid token:", error.message);
            navigate("/start");
        }
    };

    return (
        <button onClick={handleClick} className="text-white">
            Home
        </button>
    );
};

export default RoleBasedHomeLink;
