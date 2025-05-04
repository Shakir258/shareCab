import { myAxios } from "./helper";

export const getDriverProfile = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("currentId");

    return myAxios.get(`/api/drivers/${id}`,{
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