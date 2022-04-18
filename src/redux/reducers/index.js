import { combineReducers } from "redux";
import allPosts from './allPosts'
import post from './post'
import auth from './auth'
export default combineReducers({
    allPosts,
    post,
    auth
})