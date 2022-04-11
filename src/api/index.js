import axios from 'axios';
export const fetchPosts = () => axios.get(`/api/v1/posts`)
export const createPost = (payload) => axios.post(`/api/v1/posts`, payload);
export const updatePost = (payload) => axios.post(`/api/v1/posts/update`, payload);
export const currentUser = (payload) => axios.post("/api/v1/auth/login", payload);