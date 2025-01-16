import React from 'react';
import axios from 'axios';

const ClaimButton = ({ userId, onClaim }) => {
    const handleClaim = async () => {
        if (!userId) {
            alert('Please select a user!');
            return;
        }

        try {
            const response = await axios.post('https://leadboard-backend.onrender.com/api/users/claim', { userId });
            onClaim(response.data);
        } catch (error) {
            console.error('Error claiming points:', error);
        }
    };

    return (
        <button onClick={handleClaim} style={{ marginLeft: '10px' }}>
            Claim Points
        </button>
    );
};

export default ClaimButton;
