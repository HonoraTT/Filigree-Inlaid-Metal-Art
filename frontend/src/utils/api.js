import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // 后端API地址
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// 请求拦截器：自动添加 token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
