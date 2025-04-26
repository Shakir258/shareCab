import React, { createContext, useState } from 'react';


export const UserDataContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        role: "", // 'user' or 'driver'
        isLoggedIn: false,
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserContextProvider;
