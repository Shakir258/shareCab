import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../../auth/authHelper'; // logout import karna padega

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/start');
    };

    return (
        <div className="relative min-h-screen bg-white">

            {/* 👇 Outlet render karega nested routes jaise Home, About, etc. */}
            <Outlet />

            {/* 👇 Bottom Navigation */}
            <nav className='bg-[#1f1f1f] text-white flex justify-around items-center fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[95%] rounded-xl px-4 py-3 shadow-lg backdrop-blur-md bg-opacity-70'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/profile'>Profile</Link>
                <button onClick={handleLogout} className="text-red-400">Logout</button>
            </nav>

        </div>
    );
}

export default HomePage;
