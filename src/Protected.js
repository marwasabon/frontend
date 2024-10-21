import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthService from './AuthService';

function Protected() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            axios.get('http://192.168.56.1:5000/protected', {
                headers: {
                    Authorization: `Bearer ${user.access_token}`
                }
            }).then((response) => {
                setMessage(`Welcome ${response.data.logged_in_as.username}`);
            }).catch(() => {
                setMessage('Unauthorized');
            });
        } else {
            setMessage('You are not logged in');
        }
    }, []);

    return <h2>{message}</h2>;
}

export default Protected;
