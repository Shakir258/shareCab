import { myAxios } from "./helper";

export const userSignUp = (userData) => {
    return myAxios.post("/api/users/register", userData).then((response) => response.data);
}