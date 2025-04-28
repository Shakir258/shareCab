import { myAxios } from "./helper";


export const driverLogin = async (driverData) => {
    return myAxios.post("/api/auth/login", driverData)
    .then((response) => {
        console.log(response.data);
        return response.data;
    });
};
