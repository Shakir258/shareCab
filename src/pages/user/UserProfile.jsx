import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/getUserProfile';
import { logout } from '../../auth/authHelper';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const [userProfileData, setUserProfileData] = useState();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/start');
    };

    useEffect(() => {
        getUserProfile()
            .then((response) => {
                localStorage.setItem('userProfileData', JSON.stringify(response));
                setUserProfileData(response);
            })
            .catch((err) => console.error("Failed to fetch user profile", err));
    }, []);

    if (!userProfileData) {
        return <div className="text-center mt-10 text-white text-xl">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Profile Header */}
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-6 mb-8">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-4">
                        <img className="w-full h-full object-cover rounded-full" src={userProfileData.profilePhoto}/>
                        
                    </div>
                    <h2 className="text-2xl font-semibold">
                        {userProfileData.firstName} {userProfileData.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">Registered Carpool User</p>
                </div>
            </div>

            {/* Field Boxes */}
            <div className="w-full max-w-md grid grid-cols-1 gap-4 mb-10">
                <FieldBox label="Phone" value={userProfileData.phoneNo || "Not Provided"} />
                <FieldBox label="Address" value={userProfileData.address || "Not Provided"} />
                <FieldBox label="Aadhar" value={userProfileData.aadhar || "Not Provided"} />
                <FieldBox label="Rating" value={`${userProfileData.rating} ⭐`} />
                <FieldBox label="Total Rides" value={userProfileData.totalRides} />
                <FieldBox label="Last Ride" value={userProfileData.lastRideDate || "N/A"} />
                <button onClick={handleLogout} className="text-white font-semibold hover:bg-red-800 bg-red-600 px-3 py-2 rounded-lg w-25">Logout</button>
            </div>
        </div>
    );
}

function FieldBox({ label, value }) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:scale-[1.02] transition-all duration-200">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-800">{value}</p>
        </div>
    );
}

export default UserProfile;
