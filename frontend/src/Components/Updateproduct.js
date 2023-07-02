import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const Updateproduct =() =>{
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
        <center>


        <div>
            <h1>Update Products</h1>
        <input value={name} onChange={(e)=>{setname(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Name'></input>

        <input value={price} onChange={(e)=>{setprice(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Price'></input>

        <input value={category} onChange={(e)=>{setcategory(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Category'></input>

        {/* <input value={compnayname} onChange={(e)=>{setcompany(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Company'></input> */}
            <br/>
        <button className="button" onClick={Updateproducts}>Update Product</button>

        </div>
        </center>
    )
}

export default Updateproduct;
