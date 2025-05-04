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

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">OFFER RIDE</h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <input type="text" placeholder="Departure" value={departure}
                        onChange={(e) => setDeparture(e.target.value)} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none"
                    />
                    
                    {stops.map((stop, index) => (
                        <div key={index} className="relative">
                            <input type="text" placeholder={`Stop ${index + 1}`} value={stop}
                                onChange={(e) => updateStop(index, e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                            />
                            {stops.length > 1 && (
                                <button type="button" onClick={() => removeStop(index)}
                                    className="absolute top-2 right-3 text-red-500 text-xl">
                                    <i className="ri-close-line"></i>
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addStop}
                        className="w-full py-2 bg-blue-50 text-blue-700 rounded-xl shadow hover:bg-blue-100">
                        + Add Stop
                    </button>

                    <input type="text" placeholder="Destination" value={finalDestination}
                        onChange={(e) => setFinalDestination(e.target.value)} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                    />

                    <input type="date" value={date}
                        onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                    />

                    <input type="time" value={time}
                        onChange={(e) => setTime(e.target.value)} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                    />

                    <input type="number" placeholder="Seats" value={seats}
                        onChange={(e) => setSeats(e.target.value)} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                    />

                    <input type="number" placeholder="Price" value={price}
                        onChange={(e) => setPrice(e.target.value)} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
                    />

                    <button type="submit" disabled={loading}
                        className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition">
                        {loading ? "Submitting..." : "Offer Ride"}
                    </button>
                </form>
            </div>

            {/* Confirmation Panel */}
            <div ref={panelRef} className='opacity-0 bg-green-100 w-full max-w-md rounded-3xl shadow-md p-6 transition-all duration-300'>
                <h5 className='text-lg font-semibold text-green-700 mb-2'>Ride Offered!</h5>
                <p className='text-gray-600'>Your ride details have been submitted successfully.</p>
            </div>
        </div>
    );
}

export default DriverHome;
