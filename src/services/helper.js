import axios from "axios";

export const BASE_URL = "https://2d13b2111e554b82572ba91870737099.serveo.net";
// export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});