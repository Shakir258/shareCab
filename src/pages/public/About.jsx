import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-semibold mb-8 text-center text-[#10b461]">About ShareCab</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Our Mission Card */}
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800"><i className="ri-target-line text-2xl mr-2 text-[#10b461]"></i> Our Mission</h2>
                    <p className="text-lg text-gray-700">
                        To revolutionize transportation by creating an intelligent platform that connects communities, reduces travel costs, and promotes a sustainable environment through efficient ride-sharing.
                    </p>
                </div>

                {/* Key Features Card */}
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800"><i className="ri-key-2-line text-2xl mr-2 text-[#10b461]"></i> Key Features</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                        <li>Intelligent Ride Matching</li>
                        <li>Real-time Tracking & Updates</li>
                        <li>Secure User Verification</li>
                        <li>Integrated Communication Tools</li>
                        <li>Transparent Cost Sharing</li>
                    </ul>
                </div>

                {/* Sustainability Card */}
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800"><i className="ri-earth-line text-2xl mr-2 text-[#10b461]"></i> Sustainability</h2>
                    <p className="text-lg text-gray-700">
                        By encouraging shared rides, ShareCab actively contributes to reducing traffic congestion, lowering carbon emissions, and fostering a greener, more sustainable future for our communities.
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">How ShareCab Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Driver Section */}
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800"><i className="ri-steering-fill text-xl mr-2 text-[#10b461]"></i> For Drivers</h3>
                        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                            <li>Offer your available seats with your route and time.</li>
                            <li>Connect with passengers going in the same direction.</li>
                            <li>Share fuel costs and reduce your travel expenses.</li>
                            <li>Manage your ride offers and communicate with passengers.</li>
                        </ul>
                    </div>

                    {/* Passenger Section */}
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800"><i className="ri-user-fill text-xl mr-2 text-[#10b461]"></i> For Passengers</h3>
                        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                            <li>Search for available rides based on your destination and time.</li>
                            <li>Book a seat in a convenient and affordable ride.</li>
                            <li>Track your ride status and communicate with the driver.</li>
                            <li>Enjoy a comfortable and cost-effective travel solution.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Ready to Join the ShareCab Community?</h2>
                <p className="text-lg mb-6 text-gray-700">
                    Experience a smarter, more economical, and environmentally conscious way to travel. Sign up today and connect with a network of drivers and passengers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/user-signup">
                        <button className="bg-[#10b461] text-white px-6 py-3 rounded-md hover:bg-[#0e9c52] transition duration-300">
                            Sign Up as Passenger
                        </button>
                    </Link>
                    <Link to="/captain-signup">
                        <button className="bg-[#111] text-white px-6 py-3 rounded-md hover:bg-[#222] transition duration-300">
                            Sign Up as Driver
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;