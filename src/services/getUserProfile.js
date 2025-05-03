import { myAxios } from "./helper";

export const getUserProfile = async (userId, role) => {
  const token = localStorage.getItem('token');
  console.log("getUserProfile: " + token);
  console.log("getUserProfile userId:", userId, "role:", role);

  

  try {
    if (!userId || !role) throw new Error("Missing userId or role");

    let url = `/api/${role.toLowerCase()}s/${userId}`;
    const response = await myAxios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched user profile:", response.data);
    response.data.password = 'xxxxxxxx';
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};
