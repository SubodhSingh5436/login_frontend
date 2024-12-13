import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

const API = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const login = (credentials: { username: string; password: string }) => 
    API.post('/auth/login', credentials);

export const signup = (data: { username: string; email: string; phone: string; password: string }) => 
    API.post('/auth/signup', data);

export default API;
