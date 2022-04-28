import { INIT_STATE } from "../../constant";
import {getType, login, logout, register, checkCurrentUser, createCategoryUser } from "../actions";
export default function userReducers(state = INIT_STATE.auth,action){
    switch(action.type) {
        case getType(login.loginRequest):
            return { 
                isLoggedIn :false,
            }
        case getType(login.loginSuccess):
            return { 
                token:action.payload.data.token,
                isLoggedIn :true,
                currentUser: action.payload,
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
                ...state,
                currentUser: action.payload,
            }
        case getType(checkCurrentUser.checkCurrentUserSuccess):
            return{
                ...state,
                currentUser: action.payload, 
            }   
        case getType(checkCurrentUser.checkCurrentUserFailure):
            return{
                ...state,
                currentUser: action.payload, 
            }
        case getType(createCategoryUser.createCategoryUserRequest):
            return {
                ...state,
            }
        case getType(createCategoryUser.createCategoryUserSuccess):
            return {
                ...state,
                categoryUser: true
            }
        case getType(createCategoryUser.createCategoryUserFailure):
            return {
                ...state,
                err:action.payload
            }
        case getType(logout):
            return { 
                isLoggedIn: true,
                currentUser: null,
                err:null,
            }
        default:
            return state;
    } 
}