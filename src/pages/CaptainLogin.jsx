import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainLogin() {
    
    const[driverData, setDriverData] = useState({
        email: "",
        password: ""
    })

    // set data and change ui
    const handleChange = (e) => {
        setDriverData({
            ...driverData,
            [e.target.name]: e.target.value
        })
    }
    

    // handledefault submit and make input field empty
    const submitHandler = (e) => { 
        e.preventDefault();
        console.log(driverData);
        setDriverData({email: "", password: ""})
        
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
                name='email'
                value={driverData.email}
                onChange={handleChange}
                className='bg-[#eeeeee]  mb-7 px-4 py-2  w-full text-lg placeholder:text-base rounded'
                type="email" 
                placeholder='email@example.com'
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input 
                required 
                name='password'
                value={driverData.password}
                onChange={handleChange}
                className='bg-[#eeeeee] rouneded mb-7 px-4 py-2  w-full text-lg placeholder:text-base rounded'
                type="password" 
                placeholder='password'
                />
                <button
                className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2  w-full text-lg placeholder:text-base'
                >Driver Login</button>
                <p className='text-center'>New Here? <Link to='/captain-signup' className='text-blue-600 '>Register as a Driver</Link></p>
            </form>
            </div>

            <div>
                <Link to='/user-login'
                className='bg-[#4170a7] flex justify-center items-center text-white font-semibold rounded mb-5 px-4 py-2  w-full text-lg placeholder:text-base'
                >Sign in as User</Link>
            </div>
        </div>
    );
}


export default CaptainLogin;