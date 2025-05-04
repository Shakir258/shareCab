import React, { useEffect, useState } from 'react';
import { getDriverProfile } from '../../services/getDriverProfile'; // service ko alag se banana padega

function DriverProfile() {
    const [driverProfileData, setDriverProfileData] = useState();

    useEffect(() => {
        getDriverProfile()
            .then((response) => {
                localStorage.setItem('driverProfileData', JSON.stringify(response));
                setDriverProfileData(response);
            })
            .catch((err) => console.error("Failed to fetch driver profile", err));
    }, []);

    if (!driverProfileData) {
        return <div className="text-center mt-10 text-black text-xl">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Profile Header */}
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-6 mb-8">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-4">
                        <img className="w-full h-full object-cover rounded-full" src={driverProfileData.profilePhoto} alt="Driver"/>
                    </div>
                    <h2 className="text-2xl font-semibold">
                        {driverProfileData.firstName} {driverProfileData.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">Verified Carpool Driver</p>
                </div>
            </div>

            {/* Field Boxes */}
            <div className="w-full max-w-md grid grid-cols-1 gap-4 mb-10">
                <FieldBox label="Phone" value={driverProfileData.phoneNo || "Not Provided"} />
                <FieldBox label="Address" value={driverProfileData.address || "Not Provided"} />
                <FieldBox label="Aadhar" value={driverProfileData.aadhar || "Not Provided"} />
                <FieldBox label="License No." value={driverProfileData.licenseNo || "Not Provided"} />
                <FieldBox label="Vehicle Number" value={driverProfileData.vehicleNumber || "Not Provided"} />
                <FieldBox label="Rating" value={`${driverProfileData.rating} ⭐`} />
                <FieldBox label="Total Rides Given" value={driverProfileData.totalRides} />
                <FieldBox label="Last Ride" value={driverProfileData.lastRideDate || "N/A"} />
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

export default DriverProfile;
