import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { driverLogin } from '../../services/driverLogin'; // ✅ Corrected import

function CaptainLogin() {
    const navigate = useNavigate();

    const [driverData, setDriverData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setDriverData({
            ...driverData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const loginData = {
                username: driverData.email, // ✅ email -> username mapping
                password: driverData.password
            };

            const response = await driverLogin(loginData); // ✅ Correct function call

            localStorage.setItem("token", response.data.token);
            // localStorage.setItem("driver", JSON.stringify(response.driver));

            navigate("/"); // ✅ After successful login, redirect to home
        } catch (err) {
            console.error("Driver Login failed:", err);
            setError("Invalid email or password");
        }
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img 
                    className='w-15 mb-10' 
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png" 
                    alt="Logo" 
                />

                <form onSubmit={submitHandler}>
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

                    {error && (
                        <p className="text-red-600 mb-3 text-sm">{error}</p>
                    )}

                    <button 
                        type="submit"
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        Driver Login
                    </button>

                    <p className='text-center'>
                        New Here? <Link to='/captain-signup' className='text-blue-600'>Register as a Driver</Link>
                    </p>
                </form>
            </div>

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
