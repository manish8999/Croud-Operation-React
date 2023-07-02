import React from "react";
import {useNavigate} from 'react-router-dom';

const Login =()=>{
    const [email,setemail]=React.useState();
    const [password,setpassword]=React.useState();
    const navigate=useNavigate();
const handelgoin =async ()=>{

    let result=await fetch("http://localhost:3001/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':"application/json"
        }
    });
    result=await result.json();
    console.log(result);
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
    }
    

}
    return(
        <center>

       
        <div>
            <h1>Login Page</h1>
            <input  className="inputBox" type="text" placeholder="Email Id" onChange={(e)=>setemail(e.target.value)} value={email}></input>
            <input  className="inputBox" type="Password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} value={password}></input>
            <button className="button" onClick={handelgoin}>Sign Up</button>

        </div>
        </center>
    )
}

export default Login;