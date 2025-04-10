import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
    
    // State to store user email and password
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    // Handle input changes and update state
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit: prevent page reload, log data, clear inputs
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData); // In real app, send data to backend
        setUserData({ email: "", password: "" }); // Clear input fields
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                {/* Logo */}
                <img className='w-15 mb-10' 
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" 
                    alt="Logo" 
                />

                {/* Login Form */}
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input 
                        required 
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="email" 
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input 
                        required 
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="password" 
                        placeholder='password'
                    />

                    {/* This should ideally be a button, not a Link for proper form submission */}
                    <Link to='/' 
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        User Login
                    </Link>

                    {/* Redirect to signup */}
                    <p className='text-center'>
                        New Here? <Link to='/user-signup' className='text-blue-600'>Register as a User</Link>
                    </p>
                </form>
            </div>

            {/* Login as Driver (redirect to driver login) */}
            <div>
                <Link to='/captain-login'
                    className='bg-[#10b461] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg'
                >
                    Sign in as Driver
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;

/*
📝 Backend Interaction Notes:

👉 Data to send to backend (on login):
- Email (string)
- Password (string)

👉 Data to receive from backend:
- Login success/failure status
- User data (optional, like name or token)
- JWT token (for authentication, if required)
- Error message (if credentials are incorrect)

❗Note:
- Instead of using <Link> for login, use a <button type="submit"> to allow form submission.
- After successful login, navigate programmatically (e.g., using `useNavigate()`)
*/
