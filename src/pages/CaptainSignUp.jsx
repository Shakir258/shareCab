import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainsignUp() {
    // Store driver signup form data
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // Handle input changes and update form state
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData); // You can send this to backend later
        setUserData({ firstName: "", lastName: "", email: "", password: "" }); // Clear form after submit
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                {/* App/Logo */}
                <img 
                    className='w-15 mb-10' 
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" 
                    alt="Logo" 
                />

                {/* SignUp Form */}
                <form onSubmit={submitHandler}>
                    {/* Name Fields */}
                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>
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

                    {/* Email Field */}
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

                    {/* Password Field */}
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

                    {/* Should be a <button> to submit form */}
                    <Link 
                        to='/' 
                        className='bg-[#111] flex items-center justify-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        Driver SignUp
                    </Link>

                    {/* Link to login */}
                    <p className='text-center'>
                        Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link>
                    </p>
                </form>
            </div>

            {/* Alternate Sign up for user */}
            <div>
                <Link 
                    to='/user-signup'
                    className='bg-[#345f85] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg'
                >
                    Sign up as user
                </Link>
            </div>
        </div>
    );
}

export default CaptainsignUp;

/*
📝 Backend Interaction Notes:

👉 Data to send to backend (on signup):
- firstName (string)
- lastName (string)
- email (string)
- password (string)

👉 Data to receive from backend:
- Registration status (success/failure)
- Message (e.g., "User created successfully" or "Email already exists")
- Driver ID (optional)
- Token (optional for login directly after signup)

❗Important:
- Replace <Link> for "Driver SignUp" with <button type="submit"> to trigger form submit.
- Use `fetch()` or `axios` to post data to backend on form submission.
*/
