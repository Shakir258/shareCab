import { myAxios } from "./helper";


export const userLogin = async (userData) => {
    return myAxios.post("/api/auth/login", userData).then((response) => response.data);
};




