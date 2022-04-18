import { INIT_STATE } from "../../constant";
import { getAllPosts, getType, createPost, updatePost, deletePost} from "../actions";
export default function allPostsReducers(state = INIT_STATE.allPosts,action){
    switch(action.type) {
        case getType(getAllPosts.getAllPostsRequest):
            return {
                ...state,
                isLoading:true,
            }
        case getType(getAllPosts.getAllPostsSuccess):
            return {
                ...state,
                isLoading:false,
                data: action.payload,
                post:action.payload
            }
        case getType(getAllPosts.getAllPostsFailure):
            return {
                ...state,
                isLoading:false,
            }
        case getType(createPost.createPostRequest):
            return {
              post:null,
              isLoading:false,
              data: [...state.data, action.payload],
            };
        case getType(createPost.createPostSuccess):
            return {
              post:action.payload,
              isLoading:true,
              data: [...state.data, action.payload],
            };
        case getType(createPost.createPostFailure):
            return {
              ...state,
              data: [...state.data, action.payload],
              err:action.payload,
              isLoading:true,
            };
           
        case getType(updatePost.updatePostSuccess):
            return {
              ...state,
                data: state.data.map(post => post._id === action.payload._id ? action.payload : post)
            };
        case getType(deletePost.deletePostSuccess):
            return {
              ...state,
                data: state.data.filter(post => post._id !== action.payload._id)
                // filter cac bai post co id khac voi id dc payload 
                // tra ve new arr
            };
        default:
            return state;
    } 
}