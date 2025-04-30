export const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
};


export const logout = () => {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    
};