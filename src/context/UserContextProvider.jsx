import React, { createContext, useState } from 'react';


export const UserDataContext = createContext();

function UserContextProvider({ children }) {
    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        role: "", // 'user' or 'driver'
        isLoggedIn: false,
    });
    console.log(userData);

    return (
        <UserDataContext.Provider value={{ userData, setUserData}}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserContextProvider;
