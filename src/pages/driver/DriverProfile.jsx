import React, { useEffect, useState } from 'react';
import { getDriverProfile } from '../../services/getDriverProfile';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../auth/authHelper';

function DriverProfile() {
    const [driverProfileData, setDriverProfileData] = useState();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/start');
    };

    useEffect(() => {
        getDriverProfile()
            .then((response) => {
                localStorage.setItem('driverProfileData', JSON.stringify(response));
                setDriverProfileData(response); // response.data ke andar actual info hai
            })
            .catch((err) => console.error("Failed to fetch driver profile", err));
    }, []);

    if (!driverProfileData) {
        return <div className="text-center mt-10 text-black text-xl">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Profile Header */}
            <div className="w-full max-w-md backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl shadow-2xl p-6 mb-8">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                        {driverProfileData.profilePhoto ? (
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src={driverProfileData.profilePhoto}
                                alt="Driver"
                            />
                        ) : (
                            <div className="text-3xl font-bold text-gray-700">
                                {driverProfileData.firstName?.[0]}
                            </div>
                        )}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {driverProfileData.firstName} {driverProfileData.lastName}
                    </h2>
                    <p className="text-sm text-gray-600">Verified Carpool Driver</p>
                </div>
            </div>

            {/* Field Boxes */}
            <div className="w-full max-w-md grid grid-cols-1 gap-4 mb-10">
                <FieldBox label="Phone" value={driverProfileData.phoneNo || "Not Provided"} />
                <FieldBox label="Address" value={driverProfileData.address || "Not Provided"} />
                <FieldBox label="Aadhar" value={driverProfileData.aadhar || "Not Provided"} />
                <FieldBox label="Driving License" value={driverProfileData.drivingLicense || "Not Provided"} />
                <FieldBox label="Vehicle Number" value={driverProfileData.vehicleNo || "Not Provided"} />
                <FieldBox label="Vehicle Model" value={driverProfileData.vehicleModel || "Not Provided"} />
                <FieldBox label="Vehicle Type" value={driverProfileData.vehicleType || "Not Provided"} />
                <FieldBox label="Vehicle Color" value={driverProfileData.vehicleColor || "Not Provided"} />
                <FieldBox label="Rating" value={`${driverProfileData.rating} ⭐`} />
                <FieldBox label="Total Trips" value={driverProfileData.totalTrips || 0} />
                <FieldBox label="Last Ride" value={driverProfileData.lastRideDate || "N/A"} />
                <button
                    onClick={handleLogout}
                    className="bg-white/40 backdrop-blur-md shadow-lg rounded-xl p-3 border border-white/30 text-red-800 font-semibold hover:bg-red-100 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

function FieldBox({ label, value }) {
    return (
        <div className="bg-white/40 backdrop-blur-md shadow-lg rounded-xl p-4 border border-white/30 hover:scale-[1.02] transition-all duration-200">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-lg font-semibold text-gray-800">{value}</p>
        </div>
    );
}

export default DriverProfile;
