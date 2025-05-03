import React, { useContext, useEffect } from 'react';
import {
    User as UserIcon,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Car,
    BadgeInfo,
    Star,
    Pencil,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContextProvider';
import { getUserProfile } from '../../services/getUserProfile';

const Profile = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData?.id) {
            getUserProfile(userData.id, userData.role)
                .then(data => {
                    setUserData(data);
                })
                .catch(err => {
                    console.error("Error fetching profile", err);
                });
        }
    }, [userData?.id, userData?.role]);

    if (!userData || !userData.email) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    const isDriver = userData.role === 'driver';

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-xl shadow-lg ">
            <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-center space-x-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-gray-200">
                        <img
                            src={userData.profilePhoto || 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?w=600'}
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{userData.firstName} {userData.lastName}</h2>
                        <p className="text-gray-600 capitalize">{userData.role}</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/editProfile')}
                    className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
                >
                    <Pencil className="w-4 h-4" />
                    Edit
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
                <InfoRowModern icon={<Mail className="text-emerald-500" />} label="Email" value={userData.email} />
                <InfoRowModern icon={<Phone className="text-sky-500" />} label="Phone" value={userData.phoneNo || 'N/A'} />
                <InfoRowModern icon={<MapPin className="text-red-500" />} label="Address" value={userData.address || 'N/A'} />
                <InfoRowModern icon={<BadgeInfo className="text-yellow-500" />} label="Aadhar" value={userData.aadhar || 'N/A'} />
                <InfoRowModern icon={<Star className="text-orange-500" />} label="Rating" value={userData.rating || 0} />
                {!isDriver ? (
                    <>
                        <InfoRowModern icon={<CreditCard className="text-blue-500" />} label="Payment Method" value={userData.preferredPaymentMethod || 'N/A'} />
                        <InfoRowModern icon={<UserIcon className="text-purple-500 " />} label="Total Rides" value={userData.totalRides || 0} />
                    </>
                ) : (
                    <>
                        <InfoRowModern icon={<Car className="text-gray-700" />} label="Vehicle No" value={userData.vehicleNo || 'N/A'} />
                        <InfoRowModern icon={<UserIcon className="text-purple-500" />} label="Total Trips" value={userData.totalTrips || 0} />
                        <InfoRowModern icon={<Car className="text-teal-500" />} label="Available Seats" value={userData.availableSeats || 'N/A'} />
                        <InfoRowModern icon={<Car className="text-lime-500" />} label="Vehicle Type" value={userData.vehicleType || 'N/A'} />
                    </>
                )}
            </div>
        </div>
    );
};

const InfoRowModern = ({ icon, label, value }) => (
    <div className="bg-white rounded-md shadow-sm p-4">
        <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gray-100 text-gray-700">
                {icon}
            </div>
            <div>
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="text-gray-800">{value}</dd>
            </div>
        </div>
    </div>
);

export default Profile;
