import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData:" ",
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3001/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
               token:window.localStorage.getItem("token"),
             
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              this.setState({userData:data.data});
            
            });
    }
            logout = () =>{
                window.localStorage.clear();
                window.location.href="./Signin";

             }
render(){
    return(

        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
    <h1> <a href="/Crudopeartion">Go To User List</a></h1>
            <h1 className="text-blue mb-4">SignUp Form </h1>
            <div className="card">
              <div className="card-body">
    
    
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
    
                    <h6 className="mb-0">User Name:</h6>

    
                  </div>
                  <div className="col-md-9 pe-5">
                  <h6 className="mb-0">{this.state.userData.fname}</h6>


                   </div>
                 
                </div>
    
                <hr className="mx-n3"/>
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
    
                    <h6 className="mb-0">Email address</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                  <h6 className="mb-0">{this.state.userData.emailadd}</h6>


                   </div>
                </div>
    
                <hr className="mx-n3"/>
                    <br>
                    </br>
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
               
    </div>
    </div>
          </div>
        </div>
     
    )
}
}

export default User