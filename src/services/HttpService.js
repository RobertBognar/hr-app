import axios from 'axios';

const http = axios.create({
    baseURL: 'https://uteam-api-7nngy.ondigitalocean.app/api',
});

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            const useToken = localStorage.getItem('token');
            config.headers.Authorization = `Bearer ${useToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);
export default http;
