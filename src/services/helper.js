import axios from "axios";

// export const BASE_URL = "https://646824b5146a5889e348ddb0703438d6.serveo.net/";
export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});