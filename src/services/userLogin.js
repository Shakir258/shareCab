import { myAxios } from "./helper";


export const userLogin = async (userData) => {
    return myAxios.post("/api/auth/login", userData)
    .then((response) => {
        console.log(response.data);
        return response.data;
    });
};
