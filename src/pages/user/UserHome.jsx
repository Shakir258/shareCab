import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

function UserHome() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);

    const rideResults = [
        { driver: "Ravi", car: "Swift", price: "₹250", time: "4:30 PM", seats: 3 },
        { driver: "Anjali", car: "Innova", price: "₹400", time: "5:15 PM", seats: 2 },
        { driver: "Karan", car: "Alto", price: "₹180", time: "6:00 PM", seats: 1 },
        { driver: "Ravi", car: "Swift", price: "₹250", time: "4:30 PM", seats: 3 },
        { driver: "Anjali", car: "Innova", price: "₹400", time: "5:15 PM", seats: 2 },
        { driver: "Karan", car: "Alto", price: "₹180", time: "6:00 PM", seats: 1 },
    ];

    const submitHandler = (e) => {
        e.preventDefault();
        // Panel will only open on input click, not here
    };

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, { height: '70%', opacity: 1 });
            gsap.to(panelCloseRef.current, { opacity: 1 });
        } else {
            gsap.to(panelRef.current, { height: '0%', opacity: 0 });
            gsap.to(panelCloseRef.current, { opacity: 0 });
        }
    }, [panelOpen]);

    return (
        <div className='h-screen relative'>
            <img className='w-15 absolute left-5 top-5'
                src="https://cdn-icons-png.freepik.com/256/5723/5723740.png"
                alt="Logo"
            />

            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover'
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="map"
                />
            </div>

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className={`bg-white ${panelOpen ? 'h-[30%]' : 'h-[40%]'} p-5 relative transition-all duration-200`}>
                    <h4 className='text-2xl font-semibold'>Find Your Ride</h4>


                    
                    <button
                            type='submit'
                            className={`bg-black ${panelOpen ? 'block' : 'hidden'}  text-white px-4 py-1 rounded-lg mt-4 float-right absolute top-1 right-20 cursor-pointer`}
                        >
                            Search
                        </button>
                    <h2
                        ref={panelCloseRef}
                        onClick={() => {
                            setPanelOpen(false);
                            console.log(pickup, destination);
                        }}
                        className='text-2xl absolute top-5 right-5 cursor-pointer'
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h2>
                    

                    <form className='relative' onSubmit={submitHandler}>
                        <div className='line absolute h-15 w-1 bg-gray-800 rounded-full top-10 left-5'></div>

                        <input
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                            type="text"
                            placeholder='Add a pick-up location'
                            value={pickup}
                            onClick={() => setPanelOpen(true)}
                            onChange={(e) => setPickup(e.target.value)}

                        />



                        <input
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                            type="text"
                            placeholder='Enter your destination'
                            value={destination}
                            onClick={() => setPanelOpen(true)}
                            onChange={(e) => setDestination(e.target.value)}
                        />

                        
                    </form>
                </div>

                <div
                    ref={panelRef}
                    className='opacity-0 bg-[#d1e2df] h-[0%] overflow-y-auto px-4 py-3 text-white transition-all duration-500'
                >
                    <h2 className='text-xl font-bold mb-3 text-[#682732]'>Available Rides</h2>
                    {rideResults.map((ride, index) => (
                        <div key={index} className='bg-white text-black rounded-lg p-4 mb-3 shadow'>
                            <h3 className='text-lg font-semibold'>{ride.driver} ({ride.car})</h3>
                            <p>Time: {ride.time}</p>
                            <p>Seats: {ride.seats}</p>
                            <p className='font-bold'>Fare: {ride.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserHome;
