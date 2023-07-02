import React from 'react';

const Addproduct =() =>{
    
    const [name,setname]=React.useState();
    const [price,setprice]=React.useState();
    const [category,setcategory]=React.useState();
    // const [Image,setimage]=React.useState();
    const [image, setimage] = React.useState("");
    // function convertToBase64(e) {
    //     console.log(e);
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setimage(reader.result);

    //     };
    //     reader.onerror = error => {
    //         console.log("Error:", error);
    //     };

    // }
    function uploadImage() {
        fetch("http://localhost:3001/upload-imagee", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                base64: image

            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }
    const addproduct=async()=>{


        console.log(!name);
      
        console.log(name,price,category,image);

        let result=await fetch("http://localhost:3001/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,base64: image}),
        headers:{
            'Content-Type':"application/json"
        }
    });
    result=await result.json();
    console.log(result);
    }
    return(
        <center>


        <div>
            <h1>Add Products</h1>
        <input value={name} onChange={(e)=>{setname(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Name'></input>

        <input value={price} onChange={(e)=>{setprice(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Price'></input>

        <input value={category} onChange={(e)=>{setcategory(e.target.value)}} className="inputBox" type="text" placeholder='Enter Product Category'></input>
        {/* <input  value={image} onChange={(e)=>{setimage(e.target.value)}} className="inputBox" type="File"/>
        <button onClick={uploadImage} className='btn btn-primary'>Upload Image</button> */}

            <br/>
        <button className="button" onClick={addproduct}>Add Product</button>

        </div>
        </center>
    )
}

export default Addproduct;
