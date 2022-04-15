import { INIT_STATE } from "../../constant";
import {getType, login, logout, register, checkCurrentUser } from "../actions";
export default function userReducers(state = INIT_STATE.auth,action){
    switch(action.type) {
        case getType(login.loginRequest):
            return { 
                isLoggedIn :false,
            }
        case getType(login.loginSuccess):
            return { 
                isLoggedIn :true,
                currentUser: action.payload,
                token:action.payload.data.token
            }
        case getType(login.loginFailure):
            return { 
                isLoggedIn :false,
                err:action.payload
            }
        case getType(register.registerRequest):
            return { 
                isLoggedIn :false,
            }
        case getType(register.registerSuccess):
            return { 
                isLoggedIn :true,
                currentUser: action.payload,   
                token:action.payload.data.token
            }
        case getType(register.registerFailure):
            return { 
                isLoggedIn :false,
                err:action.payload
            }
 
        case getType(checkCurrentUser.checkCurrentUserRequest):
            return{
                currentUser: action.payload,
            }
        case getType(checkCurrentUser.checkCurrentUserSuccess):
            return{
                currentUser: action.payload, 
            }
        case getType(checkCurrentUser.checkCurrentUserFailure):
            return{
                currentUser: action.payload, 
            }
        case getType(logout):
            return { 
                isLoggedIn :false,
                currentUser: null,
                err:null,
                token:null,
            }
        default:
            return state;
    } 
}