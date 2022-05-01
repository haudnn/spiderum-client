import { combineReducers } from "redux";
import allPosts from './allPosts'
import post from './post'
import auth from './auth'
import categories from './categories'
import password from './password'
export default combineReducers({
    allPosts,
    post,
    auth,
    categories,
    password,
})