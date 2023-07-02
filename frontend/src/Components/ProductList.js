import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom";

const ProductList =()=>{

    const [products,setproducts]=useState([]);
    const [allimage, setAllimage] = React.useState([]);
   useEffect(()=>{
    getProducts();
   },[])

   const getProducts=async()=>{
    let result =await fetch("http://localhost:3001/products");
    result=await result.json();
    setproducts(result);
   }
   console.log(products);

   
   const deleteProduct=async(id)=>{
    let result=await fetch(`http://localhost:3001/products/${id}`,{
        method:"delete"
    });
    result=result.json()
    if(result){
        getProducts();
    }
   }

   const searchHandel=async (event)=>{
    let key=event.target.value;
    if(key){
        let result=await fetch(`http://localhost:3001/search/${key}`);
        result=await result.json();
        if(result){
            setproducts(result);
        }
    }
    else{
        getProducts();
    }
    
   }
   useEffect(()=>{
    getImage()
},[])
   function getImage() {
    fetch("http://localhost:3001/get-imagee", {
        method: "GET",
    }).then((res) => res.json())
        .then((data) => {
            { console.log(data) 
            setAllimage(data.data)};
        })
}
    return(
        <center>
            {/* <div className="App">
      <h1>Image uploading react</h1>
      {products.map((singleData) => {
        const base64String = btoa(
           
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        console.log("working fine")
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    </div> */}
       <input onChange={searchHandel} type="text" placeholder="Search Product" className="search"></input>
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>Sr No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
              
              
            </ul>
            {
            products.length >0 ?  products.map((item,index)=>
                <ul key={item._id}>
                <li>{index+1 }</li>
                <li>{item.name}</li>
                <li>RS {item.price}</li>
                <li>{item.category}</li>
                <li><button className="btn btn-primary" onClick={()=>deleteProduct(item._id)}> Delete</button>
                <Link to={"/update/" +item._id}>Update</Link>
                </li>
              
              
            </ul>
                )
                : <h1>No Result Found</h1>
            }
            
        </div>
        </center>
    )
}


export default ProductList;