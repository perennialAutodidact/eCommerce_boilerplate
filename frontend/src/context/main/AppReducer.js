import {
    LOGIN_USER,
    LOGOUT_USER
} from '../types';

export default (state, action) => {
    switch(action.type){
        default:
            return state
        case LOGIN_USER:
            return {
                ...state,
                user:action.payload
                }
        case LOGOUT_USER:
            return {
                ...state,
                user:{}
            }
    }
}