import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListProduct = () => {

    const [products, setproducts] = useState([]);
    const [allimage, setAllimage] = React.useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:3001/products");
        result = await result.json();
        setproducts(result);
    }
    console.log(products);


    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:3001/products/${id}`, {
            method: "delete"
        });
        result = result.json()
        if (result) {
            getProducts();
        }
    }

    const searchHandel = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:3001/search/${key}`);
            result = await result.json();
            if (result) {
                setproducts(result);
            }
        }
        else {
            getProducts();
        }

    }
    useEffect(() => {
        getImage()
    }, [])
    function getImage() {
        fetch("http://localhost:3001/get-imagee", {
            method: "GET",
        }).then((res) => res.json())
            .then((data) => {
                {
                    console.log(data)
                    setAllimage(data.data)
                };
            })
    }
    return (
       
        
        <div className="container p-5 mt-5 ">
            <div class="form-outline mb-4">
  <input type="search" class="form-control" id="datatable-search-input" onChange={searchHandel}/>
  <span class="form-label text-align-center" for="datatable-search-input" >Search Product</span>
</div>
        <div className="row gap-3">

        

             {
            products.length >0 ?  products.map((item,index)=>
            
            <div class="card w-25">

            <div class="card-body"  >
                <div key={item._id}>
                <h5 class="card-title">{index+1 }</h5>
                <p class="card-text">Mobile Name:- {item.name}</p>
                <p class="card-text">Category:- {item.category}</p>
                <p class="card-text">Price:- {item.price}</p>
                <button className="btn btn-primary me-5" onClick={()=>deleteProduct(item._id)}> Delete</button>
                <Link to={"/update/" +item._id}><button className="btn btn-primary">Update </button>  </Link>
            
        </div>
        </div>
        </div>


                )
                : <h1>No Result Found</h1>
            }
            </div>
            </div>
    )
}


export default ListProduct;