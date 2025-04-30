import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
    return (
        <div>
            <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1563282058-c9163e4ab24c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-7 w-full flex flex-col justify-between'>
                <img className='w-20 ml-7' src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" alt="" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-2xl font-bold'>Get Stated With ShareCab</h2>
                    <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    );
}

export default Start; 