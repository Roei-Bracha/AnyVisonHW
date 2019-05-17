import React from "react"
import "./HomePage.scss"
import Login from './Login/Login'
export default function HomePage(){
    return(
        <div className={"HomePageRoot"}>
            <h1>Best Camera Out There</h1>
            <Login/>
        </div>
    )
}