import { createActions, createAction } from 'redux-actions'
export const getType = (reduxAction) => { 
    return reduxAction().type 
}
export const getAllPosts = createActions({
    getAllPostsRequest: undefined, 
    getAllPostsSuccess: (payload) => payload,
    getAllPostsFailure: (err) => err,
})

export const getPost = createActions({
    getPostRequest: undefined, 
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err,
})

export const checkCurrentUser = createActions({
    checkCurrentUserRequest: undefined, 
    checkCurrentUserSuccess: (payload) => payload,
    checkCurrentUserFailure: (err) => err,
})
export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err,
})
export const updatePost = createActions({
   updatePostRequest: (payload) => payload,
   updatePostSuccess: (payload) => payload,
   updatePostFailure: (err) => err,
})
export const deletePost = createActions({
    deletePostRequest: (payload) => payload,
    deletePostSuccess: (payload) => payload,
    deletePostFailure: (err) => err,
 })
 export const login = createActions({
    loginRequest: (payload) => payload,
    loginSuccess: (payload) => payload,
    loginFailure: (err) => err,
 })
 export const register = createActions({
    registerRequest: (payload) => payload,
    registerSuccess: (payload) => payload,
    registerFailure: (err) => err,
 })
export const logout = createAction('LOG_OUT')
export const showModal = createAction('SHOW_CREATE_POST_MODAL')
export const hideModal = createAction('HIDE_CREATE_POST_MODAL')