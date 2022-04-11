import { combineReducers } from "redux";
import posts from './post'
import user from './user'
export default combineReducers({
    posts,
    user
})