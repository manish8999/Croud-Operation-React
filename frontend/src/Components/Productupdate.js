import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const Productupdate =() =>{
    const [name,setname]=React.useState();
    const [price,setprice]=React.useState();
    const [category,setcategory]=React.useState();
    const [compnayname,setcompany]=React.useState();
    const parms=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        console.log(parms);
        let result=await fetch(`http://localhost:3001/product/${parms.id}`);
        result =await result.json();
       setname(result.name)
       setprice(result.price)
       setcompany(result.compnayname);
       setcategory(result.category);
    }
    const Updateproducts=async()=>{
            console.log(name,price,category,compnayname);

            let result=await fetch(`http://localhost:3001/product/${parms.id}`,{
                method:'put',
                body:JSON.stringify({name,price,category,compnayname}),
                headers:{
                    'Content-Type':"application/json"
                }
            });
    
            result =await result.json();
            navigate("/");
       
    }
    return(
        <section className="vh-100 bg-image mt-5 p-5"
        style={{backgroundImage:" url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: "15px;"}}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Product Update</h2>
      
                    <form>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <span  for="form3Example1cg">Product Name</span>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={price} onChange={(e)=>{setprice(e.target.value)}}/>
                        <span for="form3Example3cg">Product Price</span>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
                        <span  for="form3Example4cg">Product Category</span>
                      </div>
      
                     
                      <div className="d-flex justify-content-center">
                        <button type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mt-5" onClick={Updateproducts}>Addproduct</button>
                      </div>
      
                    
                    </form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Productupdate;
