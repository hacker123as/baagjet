import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assume the reset token is available as a query parameter or from URL
        const token = new URLSearchParams(window.location.search).get('token');
        try {
            await axios.post('http://localhost:5000/api/users/reset-password', { password, token });
            setMessage('Password reset successfully');
        } catch (error) {
            setMessage('Error resetting password');
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Reset Password</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ResetPassword;
