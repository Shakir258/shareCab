import React, { createContext, useState, useEffect } from 'react';
import { getUserProfile } from '../services/getUserProfile'; // Import the function

export const UserDataContext = createContext();

function UserContextProvider({ children }) {
    const [userData, setUserData] = useState({
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        role: '',
        isLoggedIn: false,
    });

    useEffect(() => {
        const initializeUser = async () => {
            const token = localStorage.getItem('token');
            const storedRole = localStorage.getItem('role');
            const storedId = localStorage.getItem('userId');

            if (token && storedRole && storedId) {
                try {
                    const profile = await getUserProfile(storedId, storedRole);
                    setUserData({ ...profile, isLoggedIn: true });
                } catch (err) {
                    console.error("Error loading user profile:", err);
                }
            }
        };

        initializeUser();
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserContextProvider;
