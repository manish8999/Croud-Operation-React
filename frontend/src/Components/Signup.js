import React,{useState,useEffect} from "react";
import { json, useNavigate } from "react-router-dom";


const Signup=()=>{

    const [name,setname]=useState([]);
    const [password,setpassword]=useState([]);
    const [email,setemail]=useState([]);
    const navigate=useNavigate();


    useEffect(() =>{
        const auth=localStorage.getItem("user");
        if(auth)
        {
            alert("Register Successfully")
            navigate("/");
        }
       
    })

    const collectdata =async () =>{
        console.log(name,email,password);
        let result=await fetch("http://localhost:3001/registercomm",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':"application/json"
            },
        })
        result = await result.json()
        console.log(result);
        // if(result){
        //     navigate("/add");
        // }
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");

    }
    return(
        <section class="vh-100 p-5" style={{backgroundColor:" #508bfc;"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" >
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="text" id="typenameX-2" class="form-control form-control-lg" value={name} onChange={(e) =>setname(e.target.value)} />
              <span class="form-label" for="typename-2">Name</span>
            </div>
            <hr class="my-4"/>
            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" value={email} onChange={(e) =>setemail(e.target.value)} />
              <span class="form-label" for="typeEmailX-2">Email</span>
            </div>
            <hr class="my-4"/>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" value={password} onChange={(e) =>setpassword(e.target.value)} />
              <span class="form-label" for="typePasswordX-2">Password</span>
            </div>
            <hr class="my-4"/>

            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={collectdata}>Login</button>

            <hr class="my-4"/>

          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Signup;
