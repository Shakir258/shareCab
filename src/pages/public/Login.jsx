import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/userLogin'; // Adjust path if needed
import { UserDataContext } from '../../context/UserContextProvider';
import { jwtDecode } from 'jwt-decode';
// import { isLoggedIn } from '../../auth/authHelper';

function Login() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const loginData = {
                username: userData.email,
                password: userData.password
            };

            const response = await userLogin(loginData);
            const token = response.data.token;

            // Save token to localStorage
            localStorage.setItem("token", token);

            // Decode token and get role
            try {
                const decoded = jwtDecode(token);
                const role = decoded.role.toLowerCase();
                const id = decoded.id;

                // Update userData context
                setUserData({
                    id: id,
                    email: decoded.email,
                    firstName: decoded.firstName,
                    lastName: decoded.lastName,
                    role: role,
                    isLoggedIn: true,
                    // ...other fields
                });

                // Navigate based on role
                if (role === "user") {
                    navigate("/user");
                } else if (role === "driver") {
                    navigate("/driver");
                } else {
                    navigate("/not-authorized");
                }

            } catch (error) {
                console.error("Invalid token:", error.message);
                navigate("/start");
            }

        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid email or password");
        }
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-15 mb-10'
                    src="https://cdn-icons-png.freepik.com/256/5723/5723740.png"
                    alt="Logo"
                />

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

                    {error && (
                        <p className="text-red-600 mb-3 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className='bg-[#111] flex justify-center items-center text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'
                    >
                        Login
                    </button>

                    <p className='text-center'>
                        New Here? <Link to='/user-signup' className='text-blue-600'>Register as a User</Link>
                    </p>
                </form>
            </div>

            <div>
                <Link to='/captain-signup'
                    className='bg-[#10b461] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg'
                >
                    Sign Up as Driver
                </Link>
            </div>
        </div>
    );
}

export default Login;
