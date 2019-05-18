import {LOGIN_USER , LOGOUT_USER , ADD_NEW_CAMERA} from './actionTypes'
const defaultState = {
    username:null,
    cameras:[]
}

export default function store(state = defaultState , action){
    switch (action.type){
        case LOGIN_USER:
            return{
                ...state,
                username:action.username,
                cameras:action.cameras
            }
        case LOGOUT_USER:
            return defaultState
        case ADD_NEW_CAMERA:
            return{
                ...state,
                cameras:[
                    ...state.cameras,
                    {
                        url:action.url,
                        active:true
                    }
                ]
            }
        default: return state
    }
}