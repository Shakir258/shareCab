import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // for navigation after signup
import { userSignUp } from '../../services/userSignUp';

function UserSignUp() {
    const [errors, setErrors] = useState([]);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate(); // navigation hook

    // Handle input changes
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData);

        // ✅ Client-side password validation
        if (userData.password.length < 6 || !/[!@#$%^&*]/.test(userData.password)) {
            setErrors([{ message: "Password must be stronger. Use at least one special character (!@#$%^&*)." }]);
            return;
        }

        // ✅ Single API call for signup
        userSignUp(userData)
            .then((response) => {
                console.log("Signup success:", response);
                setErrors([]);
                // ✅ Redirect to login page after successful signup
                navigate('/login');
            })
            .catch((error) => {
                console.log("Signup error:", error);
                if (error.response && error.response.data && error.response.data.data) {
                    setErrors(error.response.data.data); // handle backend validation errors
                } else {
                    setErrors([{ message: "Something went wrong. Please try again later." }]);
                }
            });
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

                    {/* First & Last Name */}
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'>
                        User SignUp
                    </button>

                    {/* Redirect to login */}
                    <p className='text-center'>
                        Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link>
                    </p>
                </form>
            </div>

            {/* ✅ Show validation or server errors if any */}
            {errors.length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                    <ul className="list-disc pl-5 text-sm">
                        {errors.map((err, index) => (
                            <li key={index}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            )}

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
📝 Updates & Notes:

✅ Removed duplicate `userSignUp()` call.
✅ Added `useNavigate()` for redirection.
✅ Added fallback error message if backend doesn't provide `error.response.data`.
✅ Password validation added before API call.
✅ Errors are displayed in UI properly.

🛠 If needed, you can reset form after successful signup:
setUserData({ firstName: "", lastName: "", email: "", password: "" });

*/
