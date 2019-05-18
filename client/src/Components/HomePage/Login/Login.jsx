import React , {useState} from "react"
import './Login.scss'
import './InputRow'
import {Card ,Button} from "antd"
import InputRow from "./InputRow";
import {connect} from 'react-redux'
import handleSubmit from './handleSubmit'
import {loginUser} from '../../../redux/actions'

function Login ({LoginUser}){
    const [mode,setMode] = useState("Login")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("")
    const [email,setEmail] = useState("")
    const [error , setError] = useState("")
    return(
        <Card title={mode} >
            <div className={"LoginRoot"}>
            <span className={"errorSpan"}>{error}</span>
            <form>
                <InputRow name={"Username"} value={username} onChange={setUsername} required/>
                {mode==="Register" &&
                    <InputRow name={"Email"} value={email} onChange={setEmail}/>
                }
                <InputRow name={"Password"} type={"password"} required value={password} onChange={setPassword}/>
                {mode==="Register" &&
                <InputRow name={"rePassword"} label={"Re-type password"} type={"password"} required value={rePassword} onChange={setRePassword}/>
                }
            </form>
            <span className={"accountChangeMode"} onClick={()=>{setMode(mode==='Login' ? "Register" : "Login")}}>
            {mode==='Login' ? 'Dont have an account?' : "Already have an Account?"}
            </span>
            <Button onClick={()=>{handleSubmit(mode,username,password,rePassword,email,setError,LoginUser)}}>{mode}</Button>
            </div>
        </Card>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    LoginUser: (username,cameras) => {
        dispatch(loginUser(username,cameras))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    }
}

export default connect(()=>{},mapDispatchToProps)(Login)