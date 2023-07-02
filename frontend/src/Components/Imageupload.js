import React, { useEffect, useState } from 'react';

const Imageupload =() =>{
   
    const [Image,setFileData]=React.useState();
    // const [allimage,setallimage]=React.useState([]);
    const filechangehandler=(e) =>{
        setFileData(e.target.files[0]);
    }
    const onsubmithandel=(e) =>{
        e.preventDefault();
    
        const data=new FormData();
        data.append('testImage',Image)

        fetch("http://localhost:3001/uploadfile",{
            method:"post",
            body:data,
        })
        .then((result)=>{
            console.log("file Send SuccesFully");
        })
       
    }

    // useEffect(()=>{
    //     getImage()
    // },[])
    
    // function getImage(){
    //     fetch("http://localhost:3001/images",{
    //         method:"GET",
    // }).then((res=> res.json())
    // .then((data)=>{console.log(data)
    // setallimage(data.data)
    // }))
    //     }
   


    return(
        <center>


        <div>
            <h1>Add Products</h1>
        
        <form onSubmit={onsubmithandel}>

       {/* <img width={100} src={Image === '' ? '' : URL.createObjectURL(Image)}/> */}
        <input onChange={filechangehandler} className="inputBox" type="File"/>
        
            <br/>
        <button className="button">Add Product</button>
        </form>
        </div>
        </center>
    )
}

export default Imageupload;
