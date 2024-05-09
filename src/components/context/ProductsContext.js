import { useState, createContext } from "react";
import productsData from "../products/ProductsData"

//import productsData from "../Task/ProductsData"

const ProductsContext = createContext();


export const ProductsProvider = ({children}) => {
  const [productList, productListList] = useState(productsData)
  console.log(productList)
  return(<ProductsContext.Provider value={{productList}}>{children}</ProductsContext.Provider>)
}

export default ProductsContext;