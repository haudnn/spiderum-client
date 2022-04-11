import { INIT_STATE } from "../../constant";
import { currentUser, getType } from "../actions";

export default function userReducers(state = INIT_STATE.user,action){
    switch(action.type) {
        case getType(currentUser):
            return {
                user: action.payload
            }
        default:
            return state;
    } 
}