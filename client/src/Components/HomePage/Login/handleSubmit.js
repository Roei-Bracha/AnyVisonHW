import {baseUrl} from '../../../config.js'
// this function handle the submit button
export default (mode,username,password,rePassword,email,setError,LoginUser)=>{
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
                    LoginUser(username,[])
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
                    LoginUser(data.username,data.cameras)
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