import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        });
        console.log(userData);
        setEmail('');
        setPassword('');
    }



    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-15 mb-10  ' src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" alt="" />

            <form onSubmit={ (e)=> {
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                required 
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value);
                }}
                className='bg-[#eeeeee]  mb-7 px-4 py-2  w-full text-lg placeholder:text-base rounded'
                type="email" 
                placeholder='email@example.com'
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                required 
                value={password}
                onChange={(e)=> {
                    setPassword(e.target.value);
                }}
                className='bg-[#eeeeee] rouneded mb-7 px-4 py-2  w-full text-lg placeholder:text-base rounded'
                type="password" 
                placeholder='password'
                />
                <button
                className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2  w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center'>New Here? <Link to='/user-signup' className='text-blue-600 '>Create New Account</Link></p>
            </form>
            </div>

            <div>
                <Link to='/captain-login'
                className='bg-[#10b461] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2  w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
            </div>
        </div>
    );
}

export default UserLogin;