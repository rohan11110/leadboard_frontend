import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('https://leadboard-backend.onrender.com/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Leaderboard</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={user._id}>
                        {index + 1}. {user.name} - {user.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
