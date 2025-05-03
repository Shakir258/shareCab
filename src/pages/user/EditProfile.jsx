import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContextProvider';
import {
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Car,
    BadgeInfo,
    Star,
    User as UserIcon,
} from 'lucide-react';
import updateUserProfile from '../../services/updateUserProfile'; // Import the service

const EditProfile = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userData?.id) {
            setFormData({ ...userData });
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Pass userData.role to updateUserProfile
            const updatedData = await updateUserProfile(userData.id, userData.role, formData);
            setUserData(updatedData);
            setLoading(false);
            navigate('/profile');
        } catch (err) {
            console.error("Error updating profile", err);
            setError(err.message || "Failed to update profile. Please try again."); // Use the error message from the service
            setLoading(false);
        }
    };

    if (!userData) {
        return <div className="text-center mt-10">Loading user data...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName || ''}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName || ''}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100">
                        {formData.email} (Cannot be changed)
                    </div>
                </div>

                <div>
                    <label htmlFor="phoneNo" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div>
                    <label htmlFor="aadhar" className="block text-gray-700 text-sm font-bold mb-2">Aadhar Number</label>
                    <input
                        type="text"
                        id="aadhar"
                        name="aadhar"
                        value={formData.aadhar || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {!userData.isDriver ? (
                    <div>
                        <label htmlFor="preferredPaymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Preferred Payment Method</label>
                        <input
                            type="text"
                            id="preferredPaymentMethod"
                            name="preferredPaymentMethod"
                            value={formData.preferredPaymentMethod || ''}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="vehicleNo" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Number</label>
                            <input
                                type="text"
                                id="vehicleNo"
                                name="vehicleNo"
                                value={formData.vehicleNo || ''}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label htmlFor="availableSeats" className="block text-gray-700 text-sm font-bold mb-2">Available Seats</label>
                            <input
                                type="number"
                                id="availableSeats"
                                name="availableSeats"
                                value={formData.availableSeats || ''}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label htmlFor="vehicleType" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Type</label>
                            <input
                                type="text"
                                id="vehicleType"
                                name="vehicleType"
                                value={formData.vehicleType || ''}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/profile')}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
