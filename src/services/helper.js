import axios from "axios";

export const BASE_URL = "https://99034d74c379fe602fe6bce5f1a3a4f0.serveo.net";
// export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});