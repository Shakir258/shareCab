import React, { useEffect, useContext } from 'react';
import { getUserProfile } from '../services/getUserProfile';
import { UserContextProvider } from '../context/UserContextProvider';

function ProfileProvider({ children }) {
    const { setUserData } = useContext(UserContextProvider);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getUserProfile;
                setUserData(prev => ({ ...prev, ...profileData }));
            } catch (err) {
                console.error('Error fetching profile:', err);
            }
        };

        fetchProfile();
    }, []);

    return <>{children}</>;
}

export default ProfileProvider;
