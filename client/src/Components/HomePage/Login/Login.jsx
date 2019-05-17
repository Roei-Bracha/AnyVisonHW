import React , {useState} from "react"
import './Login.scss'
import './InputRow'
import InputRow from "./InputRow";
export default function Login (){
    const [mode,setMode] = useState("Login")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [rePassword,setRePassword] = useState("")
    const [email,setEmail] = useState("")
    return(
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
            <button>{mode}</button>
        </div>
    )
}