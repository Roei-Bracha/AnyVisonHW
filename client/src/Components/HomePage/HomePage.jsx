import React from "react"
import "./HomePage.scss"
import Login from './Login/Login'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
function HomePage({username}){
    if (username){
        return (<Redirect push to={'/grid'}/>)
    }
    else{
        return(
            <div className={"HomePageRoot"}>
                <h1 className={"HomePageHeader"}>Best Camera Out There</h1>
                <Login/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(HomePage)