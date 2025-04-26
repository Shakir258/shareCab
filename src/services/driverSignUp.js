import { myAxios } from "./helper";

export const driverSignUp = (driverData) => {
    return myAxios.post("/api/drivers/register", driverData).then((response) => response.data);
}