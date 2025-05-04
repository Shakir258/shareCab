import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import { Player } from '@lottiefiles/react-lottie-player';

function DriverHome() {
    const [departure, setDeparture] = useState('');
    const [finalDestination, setFinalDestination] = useState('');
    const [stops, setStops] = useState(['']);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState('');
    const [price, setPrice] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const topLeftBall = useRef(null);
    const topRightBall = useRef(null);
    const bottomLeftBall = useRef(null);
    const bottomRightBall = useRef(null);

    const addStop = () => setStops([...stops, '']);
    const updateStop = (index, value) => {
        const newStops = [...stops];
        newStops[index] = value;
        setStops(newStops);
    };
    const removeStop = (index) => {
        if (stops.length > 1) {
            const newStops = [...stops];
            newStops.splice(index, 1);
            setStops(newStops);
        } else {
            setStops(['']);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!departure || !finalDestination || !date || !time || !seats || !price) {
            alert("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setDeparture('');
            setFinalDestination('');
            setStops(['']);
            setDate('');
            setTime('');
            setSeats('');
            setPrice('');
            setPanelOpen(true);
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        if (panelOpen) {
            const timer = setTimeout(() => setPanelOpen(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [panelOpen]);

    useGSAP(() => {
        gsap.to(panelCloseRef.current, { opacity: panelOpen ? 1 : 0 });
        gsap.to(panelRef.current, {
            height: panelOpen ? '80%' : '0%',
            opacity: panelOpen ? 1 : 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, [panelOpen]);

    useGSAP(() => {
        gsap.from(".glass", {
            y: 200,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".glass input, .glass button", {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3,
            duration: 0.5,
            ease: "power2.out"
        });

        const floatAnim = (target, x, y) => {
            gsap.to(target, {
                x,
                y,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: 4 + Math.random()
            });
        };

        floatAnim(topLeftBall.current, 10, 15);
        floatAnim(topRightBall.current, -15, 10);
        floatAnim(bottomLeftBall.current, 12, -10);
        floatAnim(bottomRightBall.current, -10, -15);
    }, []);

    return (
        <div className='h-screen relative bg-gradient-to-br from-green-100 via-white to-blue-200 overflow-hidden'>

            {/* Floating Glass Balls */}
            <div ref={topLeftBall} className="absolute w-28 h-28 rounded-full backdrop-blur-lg bg-green-200 shadow-2xl top-[-40px] left-[-40px]"></div>
            <div ref={topRightBall} className="absolute w-28 h-28 rounded-full backdrop-blur-lg bg-pink-200 shadow-2xl top-[-40px] right-[-40px]"></div>
            <div ref={bottomLeftBall} className="absolute w-28 h-28 rounded-full backdrop-blur-lg bg-blue-200 shadow-2xl bottom-[-40px] left-[-40px]"></div>
            <div ref={bottomRightBall} className="absolute w-28 h-28 rounded-full backdrop-blur-lg bg-yellow-200 shadow-2xl bottom-[-40px] right-[-40px]"></div>

            {/* Logo */}
            {/* <img
                className='w-12 absolute left-6 top-6 rounded-md shadow'
                src="https://cdn-icons-png.freepik.com/256/5723/5723740.png"
                alt="Logo"
            /> */}


            {/* Glass Form Panel */}
            <div className='flex flex-col justify-start h-screen absolute top-0 w-full '>
            <h4 className='text-2xl font-semibold text-black-800 mb-2 mt-5 ml-5'>Offer a Ride</h4>
                <div className='glass overflow-y-scroll rounded-t-3xl shadow-xl  p-2 backdrop-blur-md border border-white border-opacity-20 mx-3 pb-10'>
                    
                    <h2
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className='text-2xl absolute top-4 right-6 cursor-pointer text-gray-600'
                    >
                        <i className="ri-arrow-down-s-line"></i>
                    </h2>

                    <form className='relative mt-3 ' onSubmit={submitHandler}>
                        <input className='bg-gray-200 px-3 py-2 rounded w-full mt-2' type="text" placeholder="Departure" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
                        {stops.map((stop, index) => (
                            <div key={index} className="mt-2 relative">
                                <input className='bg-gray-200 px-4 py-3 rounded w-full' type="text" placeholder={`Stop ${index + 1}`} value={stop} onChange={(e) => updateStop(index, e.target.value)} />
                                {stops.length > 1 && (
                                    <button type="button" onClick={() => removeStop(index)} className='absolute top-2 right-2 text-red-500'>
                                        <i className="ri-close-line"></i>
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={addStop} className='bg-blue-100 text-blue-800 mt-3 py-2 px-4 rounded w-full'>+ Add Stop</button>
                        <input className='bg-gray-200 px-4 py-3 rounded w-full mt-3' type="text" placeholder="Destination" value={finalDestination} onChange={(e) => setFinalDestination(e.target.value)} required />
                        <input className='bg-gray-200 px-4 py-3 rounded w-full mt-3' type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required />
                        <input className='bg-gray-200 px-4 py-3 rounded w-full mt-3' type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        <input className='bg-gray-200 px-4 py-3 rounded w-full mt-3' type="number" placeholder="Seats" value={seats} onChange={(e) => setSeats(e.target.value)} required />
                        <input className='bg-gray-200 px-4 py-3 rounded w-full mt-3' type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        <button type="submit" disabled={loading} className='bg-green-500 text-white py-3 rounded-xl w-full mt-5'>
                            {loading ? "Submitting..." : "Offer Ride"}
                        </button>
                    </form>
                </div>

                {/* Confirmation Panel */}
                <div ref={panelRef} className='opacity-0 bg-green-100 h-[0%] rounded-t-3xl shadow-lg p-6'>
                    <h5 className='text-lg font-semibold text-green-700 mb-2'>Ride Offered!</h5>
                    <p className='text-gray-600'>Your ride details have been submitted successfully.</p>
                </div>
            </div>
        </div>
    );
}

export default DriverHome;
