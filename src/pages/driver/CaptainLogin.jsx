import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainLogin() {

    // State to store driver's login data
    const [driverData, setDriverData] = useState({
        email: "",
        password: ""
    });

    // Handle input changes and update state
    const handleChange = (e) => {
        setDriverData({
            ...driverData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission: prevent reload, log data, clear inputs
    const submitHandler = (e) => { 
        e.preventDefault();
        console.log(driverData); // In real app, send this data to backend API
        setDriverData({ email: "", password: "" }); // Reset form
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                {/* Logo */}
                <img 
                    className='w-15 mb-10' 
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" 
                    alt="Logo" 
                />

                {/* Login Form */}
                <form onSubmit={submitHandler}>
                    {/* Email Field */}
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input 
                        required 
                        name='email'
                        value={driverData.email}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="email" 
                        placeholder='email@example.com'
                    />

                    {/* Password Field */}
                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input 
                        required 
                        name='password'
                        value={driverData.password}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="password" 
                        placeholder='password'
                    />

                    {/* This should be a button to submit login */}
                    <Link 
                        to='/' 
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        Driver Login
                    </Link>

                    {/* Link to signup page */}
                    <p className='text-center'>
                        New Here? <Link to='/captain-signup' className='text-blue-600'>Register as a Driver</Link>
                    </p>
                </form>
            </div>

            {/* Link to user login */}
            <div>
                <Link 
                    to='/user-login'
                    className='bg-[#4170a7] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg'
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainLogin;

/*
📝 Backend Interaction Notes:

👉 Data to send to backend (on login):
- email (string)
- password (string)

👉 Data to receive from backend:
- Login success/failure status
- Driver ID (optional)
- JWT token (optional, for authentication)
- Error message (if invalid credentials or not registered)

❗Note:
- Use a <button type="submit"> instead of <Link> for actual login request.
- After successful login, redirect user using `useNavigate()` or some global state like Redux/AuthContext.
*/
