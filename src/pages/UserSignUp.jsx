import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserSignUp() {

    // State to store user signup information
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
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

    // Handle form submission: prevent reload, log data, clear inputs
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData); // In real app, send data to backend
        setUserData({ firstName: "", lastName: "", email: "", password: "" }); // Reset form
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                {/* Logo */}
                <img className='w-15 mb-10' 
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" 
                    alt="Logo" 
                />

                {/* Signup Form */}
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>

                    {/* Name Inputs */}
                    <div className='flex gap-3 mb-4'>
                        <input 
                            required 
                            name='firstName' 
                            value={userData.firstName}
                            onChange={handleChange}
                            className='bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base rounded'
                            type="text" 
                            placeholder='First Name'
                        />

                        <input 
                            required 
                            name='lastName' 
                            value={userData.lastName}
                            onChange={handleChange}
                            className='bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base rounded'
                            type="text" 
                            placeholder='Last Name'
                        />
                    </div>

                    {/* Email Input */}
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input 
                        required 
                        name='email' 
                        value={userData.email}  
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-4 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="email" 
                        placeholder='email@example.com'
                    />

                    {/* Password Input */}
                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input 
                        required 
                        name='password' 
                        value={userData.password}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-4 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="password" 
                        placeholder='password'
                    />

                    {/* This should be a button to submit the form */}
                    <Link 
                        to='/' 
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'>
                        User SignUp
                    </Link>

                    {/* Redirect to login page */}
                    <p className='text-center'>
                        Already have an account? <Link to='/user-login' className='text-blue-600'>Login here</Link>
                    </p>
                </form>
            </div>

            {/* Sign up as Driver */}
            <div>
                <Link 
                    to='/captain-signup'
                    className='bg-[#10b461] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg'
                >
                    Sign up as Driver
                </Link>
            </div>
        </div>
    );
}

export default UserSignUp;

/*
📝 Backend Interaction Notes:

👉 Data to send to backend (on signup):
- firstName (string)
- lastName (string)
- email (string)
- password (string)

👉 Data to receive from backend:
- Signup success/failure status
- User ID (optional)
- JWT token (optional, for authentication)
- Error message (if user already exists or other issues)

❗Note:
- Use a <button type="submit"> instead of <Link> for the actual signup.
- After successful signup, navigate using `useNavigate()` or redirect user.
*/
