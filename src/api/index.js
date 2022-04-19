import axios from 'axios';
const token = localStorage.getItem('token')

export const getAllPosts = () => axios.get(`/api/v1/posts`)
export const getPost = ()=> axios.get(`/api/v1/posts/`)
export const createPost = (payload) => axios.post(`/api/v1/posts`, payload, {headers: {Authorization: `Bearer ${token}`}});
export const updatePost = (payload) => axios.post(`/api/v1/posts/update`, payload);

export const checkCurrentUser = () =>  axios.get('/api/v1/auth/', {headers: {Authorization: `Bearer ${token}`}})
export const login = (payload) => axios.post("/api/v1/auth/login", payload);
export const register = (payload) => axios.post("/api/v1/auth/register", payload);

export const getAllCategories = () => axios.get(`/api/v1/category/`)
