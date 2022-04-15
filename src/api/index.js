import axios from 'axios';
const token = localStorage.getItem('token')
export const fetchPosts = () => axios.get(`/api/v1/posts`)
export const checkCurrentUser = () =>  axios.get('/api/v1/auth/', {headers: {Authorization: `Bearer ${token}`}})
export const createPost = (payload) => axios.post(`/api/v1/posts`, payload);
export const updatePost = (payload) => axios.post(`/api/v1/posts/update`, payload);
export const login = (payload) => axios.post("/api/v1/auth/login", payload);
export const register = (payload) => axios.post("/api/v1/auth/register", payload);