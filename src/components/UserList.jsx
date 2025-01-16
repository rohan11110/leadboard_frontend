import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ onSelect }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://leadboard-backend.onrender.com/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <label htmlFor="user-select">Select User: </label>
            <select id="user-select" onChange={(e) => onSelect(e.target.value)}>
                <option value="">--Select a User--</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UserList;
