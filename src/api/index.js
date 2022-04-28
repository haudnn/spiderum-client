import axios from 'axios';
const token = localStorage.getItem('token')

// Post
export const getAllPosts = () => axios.get(`/api/v1/posts`)
export const getPost = ()=> axios.get(`/api/v1/posts/`)
export const createPost = (payload) => axios.post(`/api/v1/posts`, payload, {headers: {Authorization: `Bearer ${token}`}});
export const updatePost = (payload) => axios.put(`/api/v1/posts/update/`, payload, {headers: {Authorization: `Bearer ${token}`}});


// Auth
export const checkCurrentUser = () =>  axios.get('/api/v1/auth/', {headers: {Authorization: `Bearer ${token}`}})
export const login = (payload) => axios.post("/api/v1/auth/login", payload);
export const register = (payload) => axios.post("/api/v1/auth/register", payload);
export const createCategoryUser = (payload) => axios.put(`/api/v1/auth/create/category`, payload, {headers: {Authorization: `Bearer ${token}`}})
export const deleteCategoryUser = (payload) => axios.put(`/api/v1/auth/delete/category/`, payload, {headers: {Authorization: `Bearer ${token}`}})

// Category
export const getAllCategories = () => axios.get(`/api/v1/category/`)
