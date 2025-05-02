import React, { useContext } from 'react';
import {
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Car,
  BadgeInfo,
  Star,
} from 'lucide-react';

import { UserDataContext } from '../../context/UserContextProvider';

const Profile = () => {
  const { userData } = useContext(UserDataContext); // Corrected to use userData

  if (!userData || !userData.email) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const isDriver = userData.role === 'driver';

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <div className="flex items-center space-x-4">
        <img
          src={userData.profilePhoto || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-semibold">{userData.firstName} {userData.lastName}</h2>
          <p className="text-gray-600 capitalize">{userData.role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <InfoRow icon={<Mail className="w-5 h-5" />} label="Email" value={userData.email} />
        <InfoRow icon={<Phone className="w-5 h-5" />} label="Phone" value={userData.phoneNo || 'N/A'} />
        <InfoRow icon={<MapPin className="w-5 h-5" />} label="Address" value={userData.address || 'N/A'} />
        <InfoRow icon={<BadgeInfo className="w-5 h-5" />} label="Aadhar" value={userData.aadhar || 'N/A'} />
        <InfoRow icon={<Star className="w-5 h-5" />} label="Rating" value={userData.rating || 0} />

        {!isDriver ? (
          <>
            <InfoRow icon={<CreditCard className="w-5 h-5" />} label="Payment Method" value={userData.preferredPaymentMethod || 'N/A'} />
            <InfoRow icon={<UserIcon className="w-5 h-5" />} label="Total Rides" value={userData.totalRides || 0} />
          </>
        ) : (
          <>
            <InfoRow icon={<Car className="w-5 h-5" />} label="Vehicle No" value={userData.vehicleNo || 'N/A'} />
            <InfoRow icon={<UserIcon className="w-5 h-5" />} label="Total Trips" value={userData.totalTrips || 0} />
            <InfoRow icon={<Car className="w-5 h-5" />} label="Available Seats" value={userData.availableSeats || 'N/A'} />
            <InfoRow icon={<Car className="w-5 h-5" />} label="Vehicle Type" value={userData.vehicleType || 'N/A'} />
          </>
        )}
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 text-gray-700">
    {icon}
    <span className="font-medium w-40">{label}:</span>
    <span>{value}</span>
  </div>
);

export default Profile;
