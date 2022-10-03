import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});


instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        config.headers.common['Authorization'] = accessToken;
    }
    return config;
});








export default instance;

// https://posts-api-muxtar.herokuapp.com
// http://localhost:8080