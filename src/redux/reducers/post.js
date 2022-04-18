import { INIT_STATE } from "../../constant";
import { getType, getPost} from "../actions";

export default function postReducers(state = INIT_STATE.post,action){
    switch(action.type) {
        case getType(getPost.getPostRequest):
            return {
                ...state,
                isLoading:true,
            }
        case getType(getPost.getPostSuccess):
            return {
                ...state,
                isLoading:false,
                post: action.payload
            }
        case getType(getPost.getPostFailure):
            return {
                ...state,
                isLoading:false,
                err:action.payload
            }
        default:
            return state;
    } 
}