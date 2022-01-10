import axios from 'axios';

const http = axios.create({
    baseURL: 'https://uteam-api-7nngy.ondigitalocean.app/api',
});

export default http;
