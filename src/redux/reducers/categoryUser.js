import { INIT_STATE } from "../../constant";
import { getType, createCategoryUser} from "../actions";

export default function categoryUserReducers(state = INIT_STATE.categoryUser,action){
    switch(action.type) {
        case getType(createCategoryUser.createCategoryUserRequest):
            return {
                ...state,
                isLoading:true,
            }
        case getType(createCategoryUser.createCategoryUserSuccess):
            return {
                ...state,
                isLoading:false,
                data: action.payload
            }
        case getType(createCategoryUser.createCategoryUserFailure):
            return {
                ...state,
                isLoading:false,
                err:action.payload
            }
        default:
            return state;
    } 
}