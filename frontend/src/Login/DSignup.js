import React from "react";

class DSignup extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            fname : " ",
            lastname:" ",
            emailadd:" ",
            password:" " ,
        }

      this.handleSubmit=this.handleSubmit.bind(this);

      }

      handleSubmit(e){
        e.preventDefault();
        const {fname,lastname,emailadd,password}=this.state;
        console.log(fname,lastname,emailadd,password);
    
        fetch("http://localhost:3001/Signup", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lastname,
                emailadd,
                password,
             
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status == "ok") {
                alert("Registertion Successful");
              } 
            });
    }

    render(){

 
    return(
        <form onSubmit={this.handleSubmit}>

        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
    
            <h1 className="text-blue mb-4">SignUp Form </h1>
            <div className="card">
              <div className="card-body">
    
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
  
                    <h6 className="mb-0">First Name</h6>
    
                  </div>
                  <div className="col-md-9 pe-5">
    
                    <input type="text" className="form-control form-control-lg" onChange={(e) => this.setState({fname: e.target.value})}/>
                      
                  </div>
                </div>
    
                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
  
                    <h6 className="mb-0">Last Name</h6>
    
                  </div>
                  <div className="col-md-9 pe-5">
    
                    <input type="text" className="form-control form-control-lg" onChange={(e) => this.setState({lastname: e.target.value})}/>
                      
                  </div>
                </div>
    
                <hr className="mx-n3" />
    
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
    
                    <h6 className="mb-0">Email address</h6>
    
                  </div>
                  <div className="col-md-9 pe-5">
    
                    <input type="email" className="form-control form-control-lg" placeholder="example@example.com" onChange={(e) => this.setState({emailadd: e.target.value})}/>
    
                  </div>
                </div>
    
                <hr className="mx-n3"/>
    
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
    
                    <h6 className="mb-0">Password</h6>
    
                  </div>
                  <div className="col-md-9 pe-5">
    
                    <input type="password" className="form-control" rows="3" placeholder="Message sent to the employer" onChange={(e) => this.setState({password: e.target.value})}></input>
    
                  </div>
                </div>
    
                <hr className="mx-n3"></hr>
    
                {/* <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
    
                    <h6 className="mb-0">Upload CV</h6>
    
                  </div>
                  <div className="col-md-9 pe-5">
    
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                    <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file
                      size 50 MB</div>
    
                  </div>
                </div> */}
    
    
                <div className="px-5 py-4">
                  
                  <button type="submit" className="btn btn-primary btn-lg">Send application</button>

                  
                </div>
                <a href="/login">sign in?</a>
                
              
              </div>
            </div>
    
          </div>
        </div>
        </form>

    )
}
}

export default DSignup