import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../../auth/authHelper';
import RoleBasedHomeLink from '../../auth/RoleBasedHomeLink';   
import { jwtDecode } from 'jwt-decode';

function MainContainer() {
    const navigate = useNavigate();

    

    const token = localStorage.getItem('token');
    let role = null;
    if (token) {
        try {
            const decoded = jwtDecode(token);
            role = decoded.role;
        } catch (err) {
            console.error("Invalid token");
        }
    }

    return (
        <div className="relative min-h-screen bg-white">
            <Outlet />

            <nav className='bg-[#1f1f1f] text-white flex justify-around items-center fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[95%] rounded-xl px-4 py-3 shadow-lg backdrop-blur-md bg-opacity-70'>
                <RoleBasedHomeLink />
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                {/* <Link to='/profile' >Profile</Link> */}
                <Link to={role === 'DRIVER' ? '/driver-profile' : '/profile'}>Profile</Link>
            </nav>
        </div>
    );
}

export default MainContainer;
