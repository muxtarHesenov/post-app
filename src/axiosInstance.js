import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export default instance;

// https://posts-api-muxtar.herokuapp.com
// http://localhost:8080