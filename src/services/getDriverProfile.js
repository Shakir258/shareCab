import { myAxios } from "./helper";

export const getDriverProfile = () => {
    const token = localStorage.getItem("token");

    return myAxios.get(`/api/drivers/1`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        // localStorage.setItem("driverProfileData", JSON.stringify(response.data));
        console.log(response.data);
        return response.data.data;
    })
    .catch((error) => console.log(error));
};