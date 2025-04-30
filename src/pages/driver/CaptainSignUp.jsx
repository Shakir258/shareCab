import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { driverSignUp } from '../../services/driverSignUp';

function CaptainsignUp() {

    const [errors, setErrors] = useState([]);

    // State to store driver signup information
    const [driverData, setDriverData] = useState({
        firstName: "",
        lastName: "",
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

    // Handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(driverData);

        // Client-side validation
        if (driverData.password.length < 6 || !/[!@#$%^&*]/.test(driverData.password)) {
            setErrors([{ message: "Password must be stronger use = !@#$%^&*." }]);
            return;
        }

        // Call signup service
        driverSignUp(driverData)
            .then((response) => {
                console.log("success", response);
                setErrors([]); // Clear previous errors
                // Optional: Navigate to login or home page after successful signup
            })
            .catch((error) => {
                console.log("error log", error);
                if (error.response && error.response.data && error.response.data.data) {
                    setErrors(error.response.data.data);
                }
            });

        // Optionally reset the form after successful submission
        // setDriverData({ firstName: "", lastName: "", email: "", password: "" });
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
                            value={driverData.firstName}
                            onChange={handleChange}
                            className='bg-[#eeeeee] px-4 py-2 w-full text-lg placeholder:text-base rounded'
                            type="text"
                            placeholder='First Name'
                        />

                        <input
                            required
                            name='lastName'
                            value={driverData.lastName}
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
                        value={driverData.email}
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
                        value={driverData.password}
                        onChange={handleChange}
                        className='bg-[#eeeeee] mb-4 px-4 py-2 w-full text-lg placeholder:text-base rounded'
                        type="password"
                        placeholder='password'
                    />

                    {/* Submit button */}
                    <button
                        type="submit"
                        className='bg-[#111] flex items-center justify-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        Driver SignUp
                    </button>

                    {/* Link to login */}
                    <p className='text-center'>
                        Already have an account? <Link to='/user-login' className='text-blue-600'>Login here</Link>
                    </p>
                </form>
            </div>

            {/* Display Errors if any */}
            {errors.length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                    <ul className="list-disc pl-5 text-sm">
                        {errors.map((err, index) => (
                            <li key={index}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            )}

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
