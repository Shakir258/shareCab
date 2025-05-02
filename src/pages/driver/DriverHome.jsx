import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

function DriverHome() {
    // State variables for main departure and destination
    const [departure, setDeparture] = useState('');
    const [finalDestination, setFinalDestination] = useState('');
    // State for multiple stops
    const [stops, setStops] = useState(['']); // Initialize with one empty stop
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState('');
    const [price, setPrice] = useState('');
    const [panelOpen, setPanelOpen] = useState(false); // Controls panel visibility

    // Refs for animation elements
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);

    // Form submission handler for creating a ride
    const submitHandler = (e) => {
        e.preventDefault();
        // Here you would typically send the ride details to your backend
        console.log('Departure:', departure);
        console.log('Destination:', finalDestination);
        console.log('Stops:', stops.filter(stop => stop !== '')); // Send only non-empty stops
        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Seats:', seats);
        console.log('Price:', price);
        // Reset the form after submission (optional)
        setDeparture('');
        setFinalDestination('');
        setStops(['']);
        setDate('');
        setTime('');
        setSeats('');
        setPrice('');
        setPanelOpen(false);
    };

    // Function to add a new stop input field
    const addStop = () => {
        setStops([...stops, '']);
    };

    // Function to update a stop value at a specific index
    const updateStop = (index, value) => {
        const newStops = [...stops];
        newStops[index] = value;
        setStops(newStops);
    };

    // Function to remove a stop input field
    const removeStop = (index) => {
        if (stops.length > 1) {
            const newStops = [...stops];
            newStops.splice(index, 1);
            setStops(newStops);
        } else {
            setStops(['']); // Ensure at least one stop field remains
        }
    };

    // GSAP animation trigger based on `panelOpen` state
    useGSAP(() => {
        gsap.to(panelCloseRef.current, { opacity: panelOpen ? 1 : 0 });
        gsap.to(panelRef.current, {
            height: panelOpen ? '80%' : '0%',
            opacity: panelOpen ? 1 : 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, [panelOpen]);

    return (
        <div className='h-screen relative bg-gray-100'>
            {/* Logo Image */}
            <img
                className='w-12 absolute left-6 top-6 rounded-md shadow'
                src="https://cdn-icons-png.freepik.com/256/5723/5723740.png?ga=GA1.1.1355548291.1741342944&semt=ais_hybrid"
                alt="Logo"
            />

            {/* Input Panel for Creating Ride */}
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='bg-white rounded-t-3xl shadow-lg p-6 relative'>
                    <h4 className='text-2xl font-semibold text-gray-800 mb-4'>Offer a Ride</h4>

                    {/* Close Panel Icon */}
                    <h2
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className='text-2xl absolute top-4 right-4 cursor-pointer text-gray-600'
                    >
                        <i className="ri-arrow-down-s-line"></i>
                    </h2>

                    {/* Form for Creating Ride */}
                    <form className='relative mt-3' onSubmit={submitHandler}>

                        {/* Departure Input */}
                        <div className='relative mt-2'>
                            <i className="ri-departure-board-fill absolute left-3 top-3 text-gray-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="text"
                                placeholder='Departure location'
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                            />
                        </div>

                        {/* Stops Input Fields */}
                        {stops.map((stop, index) => (
                            <div key={index} className='relative mt-3'>
                                <i className="ri-map-pin-fill absolute left-3 top-3 text-gray-700"></i>
                                <input
                                    className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                    type="text"
                                    placeholder={`Stop ${index + 1} (Optional)`}
                                    value={stop}
                                    onChange={(e) => updateStop(index, e.target.value)}
                                />
                                {stops.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeStop(index)}
                                        className='absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none'
                                    >
                                        <i className="ri-close-circle-line text-xl align-middle"></i>
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add Stop Button */}
                        <button
                            type="button"
                            onClick={addStop}
                            className='bg-blue-500 text-white py-2 rounded-md w-full mt-3 text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition duration-300 ease-in-out'
                        >
                            <i className="ri-add-line mr-2 align-middle"></i> Add Stop
                        </button>

                        {/* Final Destination Input */}
                        <div className='relative mt-3'>
                            <i className="ri-flag-fill absolute left-3 top-3 text-gray-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="text"
                                placeholder='Final Destination'
                                value={finalDestination}
                                onChange={(e) => setFinalDestination(e.target.value)}
                            />
                        </div>

                        {/* Date Input */}
                        <div className='relative mt-3'>
                            <i className="ri-calendar-fill absolute left-3 top-3 text-gray-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="date"
                                placeholder='Date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        {/* Time Input */}
                        <div className='relative mt-3'>
                            <i className="ri-time-fill absolute left-3 top-3 text-gray-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="time"
                                placeholder='Time'
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        {/* Seats Input */}
                        <div className='relative mt-3'>
                            <i className="ri-group-fill absolute left-3 top-3 text-gray-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="number"
                                placeholder='Available Seats'
                                value={seats}
                                onChange={(e) => setSeats(e.target.value)}
                            />
                        </div>

                        {/* Price Input */}
                        <div className='relative mt-3'>
                            <i className="ri-money-dollar-circle-fill absolute left-3 top-3 text-green-700"></i>
                            <input
                                className='bg-gray-100 px-10 py-3 text-lg rounded-lg w-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition duration-300 ease-in-out'
                                type="number"
                                placeholder='Price per seat'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        {/* Offer Ride Button */}
                        <button
                            type="submit"
                            className='bg-green-500 text-white py-3 rounded-lg w-full mt-5 text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 transition duration-300 ease-in-out'
                        >
                            <i className="ri-add-line mr-2 align-middle"></i> Offer Ride
                        </button>
                    </form>
                </div>

                {/* Panel that opens/closes with GSAP animation */}
                <div ref={panelRef} className='opacity-0 bg-green-100 h-[0%] rounded-t-3xl shadow-lg p-6'>
                    <h5 className='text-lg font-semibold text-green-700 mb-2'>Ride Offered!</h5>
                    <p className='text-gray-600'>Your ride details have been submitted successfully. You can manage your offered rides in your profile.</p>
                    {/* In the future, this panel could show more details or options */}
                </div>
            </div>
        </div>
    );
}

export default DriverHome;