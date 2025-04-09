import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

function Home() {
    const [pickup, setPickup] =useState('');
    const [destination, setDestination] = useState('');
    const [panleOpen , setPanleOpen] = useState(false);
    const panleRef = useRef(null);
    const panleCloseRef = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function(){
        if(panleOpen){
            gsap.to(panleRef.current, {
                height: '80%',
                opacity: 1
                
            })
            gsap.to(panleCloseRef.current, {
                opacity: 1
            })
        }
        else{
            gsap.to(panleRef.current, {
                height: '0%',
                opacity: 0
                
            })
            gsap.to(panleCloseRef.current, {
                opacity: 0
            })
        }
    },[panleOpen])
    



    return (
        <div className='h-screen relative'>
            <img className='w-15 absolute left-5 top-5  ' src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid" alt="" />

            <div className='h-screen  w-screen'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='bg-white h-[40%] p-5 relative'>
                
                <h4 className='text-2xl font-semibold'>Find Your Ride</h4>
                <h2 ref={panleCloseRef} 
                onClick={()=>{
                    setPanleOpen(false);
                    console.log(pickup);
                    console.log(destination);
                }} 
                className='text-2xl absolute top-5 right-5'>
                <i className="ri-arrow-down-wide-line"></i>
                </h2>
                <form className='relative' onSubmit ={(e) => {
                    submitHandler(e);
                }}>
                    <div className='line absolute h-15 w-1 bg-gray-800 rounded-full top-10 left-5'></div>
                    <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
                    type="text" 
                    placeholder='Add a pick-up location ' 
                    onClick={()=>{
                        setPanleOpen(true)
                    }}
                    value={pickup}
                    onChange={(e) => {
                        setPickup(e.target.value);
                    }}
                    />
                    <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'  
                    type="text" 
                    placeholder='Enter your destination ' 
                    onClick={()=>{
                        setPanleOpen(true)
                    }}
                    value={destination}
                    onChange={(e) => {
                        setDestination(e.target.value);
                    }}
                    />
                </form>
                </div>
                <div ref={panleRef} className='opacity-0 bg-red-500 h-[0%]'>

                </div>
            </div>
        </div>
    );
}

export default Home;