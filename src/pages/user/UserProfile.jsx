import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/getUserProfile';

function UserProfile() {
    const [userProfileData, setUserProfileData] = useState();


    useEffect(() => {
        getUserProfile()
            .then((response) => {
                // Save stringified data to localStorage
                localStorage.setItem('userProfileData', JSON.stringify(response));
                
                setUserProfileData(response); // No need to read again from localStorage
            })
            .catch((err) => console.error("Failed to fetch user profile", err));
    }, []);

    if (!userProfileData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{userProfileData.firstName}</h1>
        </div>
    );
}

export default UserProfile;
