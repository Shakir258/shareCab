// src/services/updateUserProfile.js
import { myAxios } from './helper';

const updateUserProfile = async (userId, role, data) => {
    const apiUrl = `/api/users/${userId}`; // Use /api/drivers/ if needed for drivers

    try {
        const response = await myAxios.put(apiUrl, data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating user profile:`, error);
        throw error;
    }
};

export default updateUserProfile;