import { createContext } from "react";

const ProductsContext = createContext();

export default function ProductProvider({children}){
    return(
        <ProductsContext.Provider value={{name:"kavi"}}>
            {children}
        </ProductsContext.Provider>
    )
}