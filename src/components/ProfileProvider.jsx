import React, { useEffect, useContext } from 'react';
import { getUserProfile } from '../services/getUserProfile';
import { UserDataContext } from '../context/UserContextProvider';

function ProfileProvider({ children }) {
    const { userData, setUserData } = useContext(UserDataContext);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getUserProfile(userData.id, userData.role);
                setUserData(prev => ({ ...prev, ...profileData }));
            } catch (err) {
                console.error('Error fetching profile:', err);
            }
        };

        if (userData?.id && userData?.role) {
            fetchProfile();
        }
    }, [userData?.id, userData?.role]);

    return <>{children}</>;
}

export default ProfileProvider;