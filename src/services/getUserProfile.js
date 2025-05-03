import { myAxios } from "./helper";

export const getUserProfile = () => {
    const token = localStorage.getItem("token");

    return myAxios.get(`/api/users/2`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        // localStorage.setItem("userProfileData", JSON.stringify(response.data));
        return response.data.data;
    })
    .catch((error) => console.log(error));
};