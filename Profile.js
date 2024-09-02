import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data (authentication required)
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/me');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data');
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="profile">
            {user ? (
                <div>
                    <h2>Profile</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phoneNumber}</p>
                    {/* Add options to edit profile */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
