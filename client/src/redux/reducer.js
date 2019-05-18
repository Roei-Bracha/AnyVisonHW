import {LOGIN_USER , LOGOUT_USER} from './actionTypes'
const defaultState = {
    username:null,
    cameras:[]
}

export default function store(state = defaultState , action){
    switch (action.type){
        case LOGIN_USER:
            console.log(LOGIN_USER)
            return{
                ...state,
                username:action.username,
                cameras:action.cameras
            }
        case LOGOUT_USER:
            return defaultState
        default: return state
    }
}