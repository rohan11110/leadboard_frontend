import React, { useState } from 'react';
import UserList from '../components/UserList';
import ClaimButton from '../components/ClaimButton';
import Leaderboard from '../components/Leaderboard';

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [claimedPoints, setClaimedPoints] = useState(null);

    const handleClaim = (data) => {
        setClaimedPoints(data.points);
        alert(`User ${data.user.name} claimed ${data.points} points!`);
    };

    return (
        <div>
            <UserList onSelect={setSelectedUser} />
            <ClaimButton userId={selectedUser} onClaim={handleClaim} />
            <Leaderboard />
        </div>
    );
};

export default HomePage;
