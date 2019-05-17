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
            <Button onClick={()=>{handleSubmit(mode,username,password,rePassword,email,setError)}}>{mode}</Button>
            </div>
        </Card>
    )
}
// this function handle the submit button
const handleSubmit = (mode,username,password,rePassword,email,setError)=>{
    //first we need to check if the user want to create user or to login
    if(mode === "Register"){ // if he wants to login
        if(password === rePassword){ // and the passwords are match
            fetch(`${baseUrl}/api/newUser`,{ // we do a fetch to the server to create the user
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username:username.toLowerCase(),
                    password,
                    email
                })
            }).then((response)=>{
                if(response.ok){ // if we got 200
                    response.json().then((data)=>{
                        setError("")
                        console.log(data)
                    })
                }
                else{ // if tere was an error
                    if(response.status===406){ // if the user in use the server return 406
                        setError("username in use") //show it to the user
                    }
                    else{ // for any other error
                        setError("unknown error")
                    }
                }
            })
        }
        else{ // if the password dont metch
            setError("paswword not match")
        }
    }
    else{ // if the user wants to login
        fetch(`${baseUrl}/api/login`,{ // send a request to the server for login
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username,
                password
            })
        }).then(response=>{
            if(response.ok){ // if its work fine we get back the cameras and the user name
                response.json().then((data)=>{
                    setError("")
                    console.log(data)
                })
            }
            else{ // otherwise show the error
                console.log(response)
                if(response.status===401)
                    setError("worng username or password")
                else{
                    setError("unknown error")
                }
            }
        }).catch((err)=>{
            setError("unknown error")
            console.log(err)}
        )
    }
}