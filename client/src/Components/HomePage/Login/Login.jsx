import React , {useState} from "react"
import './Login.scss'
import './InputRow'
import {Card ,Button} from "antd"
import InputRow from "./InputRow";
import {baseUrl} from '../../../config.js'
export default function Login (){
    const [mode,setMode] = useState("Login")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("")
    const [email,setEmail] = useState("")
    return(
        <Card title={mode} >
            <div className={"LoginRoot"}>
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
            <Button onClick={()=>{handleSubmit(mode,username,password,rePassword,email)}}>{mode}</Button>
            </div>
        </Card>
    )
}

const handleSubmit = (mode,username,password,rePassword,email)=>{
    if(mode === "Register"){
        if(password === rePassword)
        fetch(`${baseUrl}/api/newUser`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username:username.toLowerCase(),
                password,
                email
            })
        })
    }
    else{
        fetch(`${baseUrl}/api/login`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username,
                password
            })
        }).then(data=>data.json()).then((response)=>{
            console.log(response)
        })
    }
}