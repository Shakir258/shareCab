// services/getUserProfile.js
import { myAxios } from './helper';

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  console.log("getUserProfile: " + token)

  try {
    const response = await myAxios.get('/api/users/2', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched user profile:", response.data);
    return response.data; // direct DTO from backend, no .data.data
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};
