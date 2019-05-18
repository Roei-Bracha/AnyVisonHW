import {LOGIN_USER , ADD_NEW_CAMERA} from './actionTypes'

export function loginUser (username,cameras){
    return {
        type:LOGIN_USER,
        username,
        cameras
    }
}

export function addNewCamera (url){
    return {
        type:ADD_NEW_CAMERA,
        url
    }
}