import {LOGIN_USER} from './actionTypes'

export function loginUser (username,cameras){
    console.log(username,cameras)
    return {
        type:LOGIN_USER,
        username,
        cameras
    }
}
