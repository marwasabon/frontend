import axios from 'axios';

const API_URL = 'http://192.168.56.1:5000';

const register = (username, password) => {
    return axios.post(API_URL + '/register', {
        username,
        password
    });
};

const login = (username, password) => {
    return axios.post(API_URL + '/login', {
        username,
        password
    }).then((response) => {
        if (response.data.access_token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};
