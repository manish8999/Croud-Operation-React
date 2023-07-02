import React from "react";


class Signin extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            email:" ",
            password:" " ,
        }
    
      this.handleSubmit=this.handleSubmit.bind(this);
      
      }
      
      handleSubmit(e){
     
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password);
    
        fetch("http://localhost:3001/login", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
             
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status == "ok") {
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("LoggedIn",true);
                window.location.href = "/add";
              
              }
             
            
            });
    }
   render(){

 return(
        <>
        <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr class="my-4"/>

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
} 

export default Signin;