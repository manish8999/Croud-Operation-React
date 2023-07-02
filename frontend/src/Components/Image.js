import React, { useEffect } from "react";

function Image(){
    const [image,setImage]=React.useState("");
    const [allimage,setAllimg]=React.useState([]);

    useEffect(()=>{
        getImage()
    },[])
    function getImage(){
        fetch("http://localhost:3001/products",{
            method:"GET",

        }).then((res)=> res.json()).then((data)=>{
            console.log(data);
            setAllimg(data.data);
        })
    }
    return(

        <div>
            {allimage.map(data=>{
                return(
                    <img width={100} height={100} src={data.image}/>

                )
            })}
        </div>
    )

}

export default Image;