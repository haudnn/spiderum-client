import axios from 'axios';
export const fetchPosts = () => axios.get(`/api/v1/posts`)
export const createPost = (payload) => axios.post(`${URL}/api/v1/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/api/v1/posts/update`, payload);