import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hook/useApi";
import Product from "./Product";

function ProductList(){
    const {categoryName} = useParams();
    const {loading, error, data} = useApi(`https://fakestoreapi.com/products/category/${categoryName}`,[])

    
    if(loading){
        return<div className="loader">Products are loading ......</div>
    }else if(error){
        return<div className="error">Oops please reload the page!!</div>
    }else if(data.length === 0){
        return <div>No products found please select a category</div>
    }else{
        return <div className="product-list">
            {data.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>;
    }
}

export default ProductList;