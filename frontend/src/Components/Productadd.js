import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const ProductAdd =() =>{
    
    const [name,setname]=React.useState();
    const [price,setprice]=React.useState();
    const [category,setcategory]=React.useState();
    // const [Image,setimage]=React.useState();
    const [image, setimage] = React.useState("");
    const parms=useParams();
    const navigate=useNavigate();
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
    // function uploadImage() {
    //     fetch("http://localhost:3001/upload-imagee", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             base64: image

    //         })
    //     }).then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    // }
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
                    <h2 className="text-uppercase text-center mb-5">Product Add</h2>
      
                    <form>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <span className="form-label" for="form3Example1cg">Product Name</span>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={price} onChange={(e)=>{setprice(e.target.value)}}/>
                        <span className="form-label" for="form3Example3cg">Product Price</span>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
                        <span className="form-label" for="form3Example4cg">Product Category</span>
                      </div>
      
                     
                      <div className="d-flex justify-content-center">
                        <button type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mt-5" onClick={addproduct}>Addproduct</button>
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

export default ProductAdd;
