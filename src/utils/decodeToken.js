import jwt_decode from "jwt-decode";

export const decodeToken = (token) => {
    if (!token) return null;
    return jwt_decode(token);
};
