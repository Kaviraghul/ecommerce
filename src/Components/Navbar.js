 import React, {  useEffect } from "react";
import { useHistory , NavLink} from "react-router-dom";
import useApi from "../hook/useApi";

function NavBar(){
    const {loading, error, data:categories} = useApi("https://fakestoreapi.com/products/categories", null);

    const history = useHistory();
    useEffect(() => {
        if(!loading && categories?.length > 0){
            // setSelectedCategory(categories[0]);
            history.push(`/products/${categories[0]}`);
        }
    }, [categories, loading, history])


    
    if(loading){
        return <div>Categories are loading</div>
    }else if(error){
        <div>Something went wrong please refresh the page</div>
    }else if(categories.length === 0){
        <div>No categories available</div>
    }else{
        return <div className="products">
            {categories.map(category => (
                <NavLink key={`category-${category}`} to={`/products/${category}`} className="product-category" activeClassName="product-category--selected" >{category}</NavLink>
            ))}
        </div>
    }
}

export default NavBar; 